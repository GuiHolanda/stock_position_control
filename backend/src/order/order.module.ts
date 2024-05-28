import { Module } from '@nestjs/common';
import { ORDER_SERVICE } from './OrderService';
import { OrderController } from './order.controller';
import { OrderServiceImpl } from './OrderServiceImpl';

@Module({
  providers: [
    {
      useClass: OrderServiceImpl,
      provide: ORDER_SERVICE,
    },
  ],
  controllers: [OrderController],
})
export class OrderModule {}
