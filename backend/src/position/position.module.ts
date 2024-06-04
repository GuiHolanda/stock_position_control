import { Module, forwardRef } from '@nestjs/common';
import { PositionController } from './position.controller';
import { PositionService } from './position.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PositionEntity } from './entities/position.entity';
import { PositionHistoryModule } from '../position_history/position_history.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([PositionEntity]),
    forwardRef(() => PositionHistoryModule),
  ],
  controllers: [PositionController],
  providers: [PositionService],
  exports: [PositionService],
})
export class PositionModule {}
