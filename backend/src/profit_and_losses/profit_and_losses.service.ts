import { Injectable } from '@nestjs/common';
import { ProfitsAndLossesEntity } from './entities/profit_and_lossees.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PositionEntity } from '../position/entities/position.entity';
import { CreatePositionDTO } from '../position/dtos/createPosition.dto';
import { PositionHistoryService } from '../position_history/position_history.service';
import { CreateProfitOrLossDTO } from './dtos/createProfitOrLoss.dto';
import { ORDER_TYPE_BUY } from '../utils/constants';

@Injectable()
export class ProfitAndLossesService {
  constructor(
    @InjectRepository(ProfitsAndLossesEntity)
    private readonly profitAndLossRepository: Repository<ProfitsAndLossesEntity>,

    private readonly positionHistoryService: PositionHistoryService,
  ) {}

  public async saveProfitOrLoss(
    currentPosition: PositionEntity,
    createPositionDTO: CreatePositionDTO,
  ): Promise<ProfitsAndLossesEntity> {
    const profitOrLossObject = await this.createProfitOrLossObject(
      currentPosition,
      createPositionDTO,
    );

    return await this.profitAndLossRepository.save(profitOrLossObject);
  }

  private calculateProfitOrLoss(
    currentPosition: PositionEntity,
    createPositionDTO: CreatePositionDTO,
  ): number {
    const { price: currentPrice } = currentPosition;
    const { qtd: orderQuantity, price: orderPrice } = createPositionDTO;

    let profitOrLoss: number;

    if (currentPosition.type === ORDER_TYPE_BUY) {
      profitOrLoss = (orderPrice - currentPrice) * orderQuantity;
    } else {
      profitOrLoss = (currentPrice - orderPrice) * orderQuantity;
    }
    return profitOrLoss;
  }

  private async createProfitOrLossObject(
    currentPosition: PositionEntity,
    createPositionDTO: CreatePositionDTO,
  ): Promise<CreateProfitOrLossDTO> {
    const { price: currentPrice, qtd: currentQuantity } = currentPosition;
    const { qtd: orderQuantity, price: orderPrice } = createPositionDTO;

    const profitOrLoss = this.calculateProfitOrLoss(
      currentPosition,
      createPositionDTO,
    );

    const qtd =
      currentQuantity - orderQuantity < 0 ? currentQuantity : orderQuantity;

    const isPositionAndOrderTheSameType =
      currentPosition.type === createPositionDTO.type;

    if (!isPositionAndOrderTheSameType) {
      const positionHistory =
        await this.positionHistoryService.getLastPositionHistoryByUserIdAndAsset(
          currentPosition.userId,
          currentPosition.asset,
        );

      const profitOrLossObject: CreateProfitOrLossDTO = {
        userId: currentPosition.userId,
        positionHistoryId: positionHistory.id,
        asset: currentPosition.asset,
        type: currentPosition.type,
        market: currentPosition.market,
        qtd,
        startPrice: currentPrice,
        endPrice: orderPrice,
        profitOrLoss: Number(profitOrLoss.toFixed(2)),
      };

      return profitOrLossObject;
    }
  }
}
