import { Module } from '@nestjs/common';
import { ProfitAndLossesService } from './profit_and_losses.service';
import { ProfitsAndLossesEntity } from './entities/profit_and_lossees.entity';
import { PositionHistoryModule } from '../position_history/position_history.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [ProfitAndLossesService],
  imports: [
    TypeOrmModule.forFeature([ProfitsAndLossesEntity]),
    PositionHistoryModule,
  ],
  exports: [ProfitAndLossesService],
})
export class ProfitAndLossesModule {}
