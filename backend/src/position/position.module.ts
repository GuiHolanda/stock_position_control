import { Module, forwardRef } from '@nestjs/common';
import { PositionController } from './position.controller';
import { PositionService } from './position.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PositionEntity } from './entities/position.entity';
import { PositionHistoryModule } from '../position_history/position_history.module';
import { ProfitAndLossesModule } from '../profit_and_losses/profit_and_losses.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([PositionEntity]),
    forwardRef(() => PositionHistoryModule),
    ProfitAndLossesModule,
  ],
  controllers: [PositionController],
  providers: [PositionService],
  exports: [PositionService],
})
export class PositionModule {}
