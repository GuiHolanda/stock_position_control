import { Body, Controller, Inject, Post } from '@nestjs/common';
import { excelToJson } from '../utils/generateJsonFromXlsx';
import { ORDER_SERVICE, OrderService } from './OrderService';

@Controller('order')
export class OrderController {
  constructor(
    @Inject(ORDER_SERVICE)
    private readonly orderService: OrderService,
  ) {}
  @Post()
  async getOrdersFromExcelFile(@Body() filePath: any) {
    const rawOrders = excelToJson(filePath.filePath);

    const ordersWithFormattedKeys =
      this.orderService.formatOrderKeysAndStringValues(rawOrders);

    const consolidatedOrders = this.orderService.consolidateOrders(
      ordersWithFormattedKeys,
    );

    return consolidatedOrders;
  }
}
