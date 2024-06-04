import { Module, forwardRef } from '@nestjs/common';
import { PositionHistoryService } from './position_history.service';
import { PositionHistoryEntity } from './entities/position_history.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PositionModule } from '../position/position.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([PositionHistoryEntity]),
    forwardRef(() => PositionModule),
  ],
  providers: [PositionHistoryService],
  exports: [PositionHistoryService],
})
export class PositionHistoryModule {}
