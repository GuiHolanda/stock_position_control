import { Body, Controller, Post } from '@nestjs/common';
import { excelToJson } from '../utils/generateJsonFromXlsx';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}
  @Post()
  async createAddress(@Body() filePath: any) {
    const rawOrders = excelToJson(filePath.filePath);

    const ordersWithFormattedKeys =
      this.orderService.formatOrderKeysAndStringValues(rawOrders);

    const consolidatedOrders = this.orderService.consolidateOrders(
      ordersWithFormattedKeys,
    );

    return consolidatedOrders;
  }
}
