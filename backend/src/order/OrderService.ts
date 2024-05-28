import { rawOrders } from '../utils/generateJsonFromXlsx';
import { OrderItem } from './OrderServiceImpl';

export const ORDER_SERVICE = 'ORDER_SERVICE';

export interface OrderService {
  consolidateOrders(orders: OrderItem[]): OrderItem[];
  formatOrderKeysAndStringValues(orders: rawOrders[]): OrderItem[];
  getModificationsDate(orders: OrderItem[], onlySales: boolean): string[];
}
