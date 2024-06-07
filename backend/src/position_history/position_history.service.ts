import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PositionHistoryEntity } from './entities/position_history.entity';
import { Repository } from 'typeorm';
import { PositionHistoryDTO } from './dtos/position_history.dto';
import { PositionService } from '../position/position.service';

@Injectable()
export class PositionHistoryService {
  constructor(
    @InjectRepository(PositionHistoryEntity)
    private readonly positionHistoryRepository: Repository<PositionHistoryEntity>,

    @Inject(forwardRef(() => PositionService))
    private readonly currentPositionService: PositionService,
  ) {}

  async addNewPositionHistory(
    userId: number,
    asset: string,
  ): Promise<PositionHistoryEntity> {
    const currentPosition =
      await this.currentPositionService.getPositionByAssetAndUserId(
        asset,
        userId,
      );

    const newCurrentPosition = await this.positionHistoryRepository.save(
      new PositionHistoryDTO(currentPosition),
    );

    if (currentPosition.qtd === 0) {
      await this.currentPositionService.deletePosition(currentPosition.id);
    }

    return newCurrentPosition;
  }

  async getLastPositionHistoryByUserIdAndAsset(
    userId: number,
    asset: string,
  ): Promise<PositionHistoryEntity> {
    return await this.positionHistoryRepository.findOne({
      where: { userId, asset },
      order: { createdAt: 'DESC' },
    });
  }
}
