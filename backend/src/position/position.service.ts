import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
  forwardRef,
} from '@nestjs/common';
import { PositionEntity } from './entities/position.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePositionDTO } from './dtos/createPosition.dto';
import { ORDER_TYPE_BUY, ORDER_TYPE_SELL } from '../utils/constants';
import { PositionHistoryService } from '../position_history/position_history.service';

interface SavePosition {
  id?: number;
  userId?: number;
  asset?: string;
  type?: 'compra' | 'venda';
  market?: string;
  qtd?: number;
  price?: number;
  value?: number;
}

@Injectable()
export class PositionService {
  constructor(
    @InjectRepository(PositionEntity)
    private readonly positionRepository: Repository<PositionEntity>,

    @Inject(forwardRef(() => PositionHistoryService))
    private readonly positionHistoryService: PositionHistoryService,
  ) {}

  public async createPosition(
    createPositionDTO: CreatePositionDTO,
    userId: number,
  ): Promise<PositionEntity> {
    const currentPosition = await this.getPositionByAssetAndUserId(
      createPositionDTO.asset,
      userId,
    ).catch(() => undefined);

    if (!currentPosition) {
      const newCurrentPosition = await this.savePosition({
        ...createPositionDTO,
        value: createPositionDTO.qtd * createPositionDTO.price,
        userId,
      });

      await this.positionHistoryService.addNewPositionHistory(
        userId,
        createPositionDTO.asset,
      );

      return newCurrentPosition;
    } else {
      return await this.updateCurrentPosition(
        createPositionDTO,
        currentPosition,
      );
    }
  }

  public async getPositionByAssetAndUserId(
    asset: string,
    userId: number,
  ): Promise<PositionEntity> {
    const position = await this.positionRepository.findOne({
      where: {
        asset,
        userId,
      },
      order: { createdAt: 'DESC' },
    });

    if (!position) {
      throw new NotFoundException(
        `No opened position were found fot the asset: ${asset}`,
      );
    }

    return position;
  }

  public async updateCurrentPosition(
    createPositionDTO: CreatePositionDTO,
    currentPosition: PositionEntity,
  ): Promise<PositionEntity> {
    const isPositionAndOrderTheSameType =
      currentPosition.type === createPositionDTO.type;

    let savedPosition: PositionEntity;

    if (isPositionAndOrderTheSameType) {
      savedPosition = await this.handlePositionAndOrderTheSameType(
        createPositionDTO,
        currentPosition,
      );
    } else {
      const orderType =
        currentPosition.type === ORDER_TYPE_BUY
          ? ORDER_TYPE_SELL
          : ORDER_TYPE_BUY;

      savedPosition = await this.handlePositionAndOrderWithDifferentType(
        createPositionDTO,
        currentPosition,
        orderType,
      );
    }

    await this.positionHistoryService.addNewPositionHistory(
      currentPosition.userId,
      createPositionDTO.asset,
    );

    return savedPosition;
  }

  private async handlePositionAndOrderTheSameType(
    createPositionDTO: CreatePositionDTO,
    currentPosition: PositionEntity,
  ) {
    const { qtd: currentQuantity, value: currentValue } = currentPosition;
    const { qtd: orderQuantity, price: orderPrice } = createPositionDTO;

    const newQtd = currentQuantity + orderQuantity;
    const newValue = currentValue + orderPrice * orderQuantity;
    const newPrice = Number((newValue / newQtd).toFixed(2));

    return await this.savePosition({
      id: currentPosition.id,
      qtd: newQtd,
      price: newPrice,
      value: newValue,
    });
  }

  private async handlePositionAndOrderWithDifferentType(
    createPositionDTO: CreatePositionDTO,
    currentPosition: PositionEntity,
    orderType: 'compra' | 'venda',
  ) {
    const { qtd: currentQuantity, price: currentPrice } = currentPosition;
    const { qtd: orderQuantity, price: orderPrice } = createPositionDTO;

    const newQtd = currentQuantity - orderQuantity;

    if (newQtd > 0) {
      const newValue = Number((currentPrice * newQtd).toFixed(2));

      return await this.savePosition({
        id: currentPosition.id,
        qtd: newQtd,
        value: newValue,
      });
    }
    if (newQtd === 0) {
      return await this.savePosition({
        id: currentPosition.id,
        qtd: newQtd,
        value: 0,
      });
    }
    if (newQtd < 0) {
      const closedPrice = currentPrice;
      const newOpenedPrice = orderPrice;

      const newValue = newOpenedPrice * Math.abs(newQtd);

      await this.savePosition({
        id: currentPosition.id,
        qtd: 0,
        price: Number(closedPrice.toFixed(2)),
        value: 0,
      });

      await this.positionHistoryService.addNewPositionHistory(
        currentPosition.userId,
        createPositionDTO.asset,
      );

      return await this.savePosition({
        qtd: Math.abs(newQtd),
        price: Number(newOpenedPrice.toFixed(2)),
        value: Number(newValue.toFixed(2)),
        type: orderType,
        userId: currentPosition.userId,
        asset: currentPosition.asset,
        market: currentPosition.market,
      });
    }
  }

  public async savePosition(position: SavePosition): Promise<PositionEntity> {
    return await this.positionRepository.save(position).catch((error) => {
      console.error('Error saving position:', error.message);
      throw new BadRequestException(
        'An error occurred while saving the position.',
        { cause: new Error(error), description: error.message },
      );
    });
  }

  public async deletePosition(positionId: number) {
    return await this.positionRepository.delete(positionId);
  }
}
