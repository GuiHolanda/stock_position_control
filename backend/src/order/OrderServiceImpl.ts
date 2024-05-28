import { Injectable } from '@nestjs/common';
import { rawOrders } from '../utils/generateJsonFromXlsx';
import { OrderService } from './OrderService';

export interface OrderItem {
  date: string;
  market: string;
  type: string;
  asset: string;
  quantity: number;
  value: number;
  price: number;
}

@Injectable()
export class OrderServiceImpl implements OrderService {
  public formatOrderKeysAndStringValues(orders: rawOrders[]): OrderItem[] {
    const formattedData = orders.map((order) => {
      const {
        'Data do Negócio': date,
        'Tipo de Movimentação': type,
        Mercado: market,
        'Código de Negociação': asset,
        Quantidade: quantityStr,
        Valor: valueStr,
        Preço: priceStr,
      } = order;

      const quantity = parseFloat(quantityStr.replace(/[^\d.-]/g, ''));
      const value = parseFloat(valueStr.replace(/[^\d.-]/g, ''));
      const price = parseFloat(priceStr.replace(/[^\d.-]/g, ''));

      return {
        date,
        market,
        type,
        asset,
        quantity,
        value,
        price,
      };
    });

    return formattedData;
  }

  private removeFFromAssetsCode(orders: OrderItem[]): OrderItem[] {
    return orders.map((order) => {
      if (
        order.asset.slice(-1) === 'F' &&
        order.market === 'Mercado Fracionário'
      ) {
        const formattedOrder: OrderItem = {
          ...order,
          asset: order.asset.slice(0, -1),
          market: 'Mercado à Vista',
        };
        return formattedOrder;
      } else {
        return {
          ...order,
        };
      }
    });
  }

  public getModificationsDate(
    orders: OrderItem[],
    onlySales = false,
  ): string[] {
    const stringDateArray: string[] = [];
    let filteredOrders: OrderItem[];
    onlySales
      ? (filteredOrders = orders.filter(
          (order) => order.asset.length < 7 && order.type === 'Venda',
        ))
      : (filteredOrders = orders.filter((order) => order.asset.length < 7));
    filteredOrders.map((order) => {
      const stringDate = order.date;
      const isDateInArray = stringDateArray.includes(stringDate);
      if (!isDateInArray) {
        stringDateArray.push(stringDate);
      }
    });
    return stringDateArray;
  }

  public consolidateOrders(orders: OrderItem[]): OrderItem[] {
    const consolidatedOrders: OrderItem[] = [];

    const formattedOrders = this.removeFFromAssetsCode(orders);

    const modificationsDate = this.getModificationsDate(orders);

    modificationsDate.map((date) => {
      const dateFilteredOrders = formattedOrders.filter(
        (order) => order.date === date,
      );

      const orderAssets = new Set(
        dateFilteredOrders.map((order) => order.asset),
      );

      orderAssets.forEach((asset) => {
        const assetFilteredOrders = dateFilteredOrders.filter(
          (order) => order.asset === asset,
        );

        let consolidatedQuantityBuy = 0;
        let consolidatedValueBuy = 0;
        let consolidatedQuantitySell = 0;
        let consolidatedValueSell = 0;

        assetFilteredOrders.map((order) => {
          if (order.type === 'Venda') {
            consolidatedQuantitySell += order.quantity;
            consolidatedValueSell += order.value;
          } else {
            consolidatedQuantityBuy += order.quantity;
            consolidatedValueBuy += order.value;
          }
        });

        const consolidatedOrderBuy: OrderItem = {
          asset,
          market: 'Mercado à Vista',
          date,
          quantity: consolidatedQuantityBuy,
          value: consolidatedValueBuy,
          price: consolidatedValueBuy / consolidatedQuantityBuy,
          type: 'Compra',
        };

        const consolidatedOrderSell: OrderItem = {
          asset,
          market: 'Mercado à Vista',
          date,
          quantity: consolidatedQuantitySell,
          value: consolidatedValueSell,
          price: consolidatedValueSell / consolidatedQuantitySell,
          type: 'Venda',
        };

        consolidatedOrderBuy.quantity > 0
          ? consolidatedOrders.push(consolidatedOrderBuy)
          : undefined;
        consolidatedOrderSell.quantity > 0
          ? consolidatedOrders.push(consolidatedOrderSell)
          : undefined;
      });
    });
    return consolidatedOrders;
  }
}
