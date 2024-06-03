import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PositionEntity } from './entities/position.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePositionDTO } from './dtos/createPosition.dto';
import {
  ORDER_TYPE_BUY,
  ORDER_TYPE_SELL,
  POSITION_STATUS_CLOSED,
  POSITION_STATUS_OPENED,
} from '../utils/constants';

interface SavePosition {
  id?: number;
  userId?: number;
  asset?: string;
  type?: 'compra' | 'venda';
  market?: string;
  status?: 'opened' | 'closed';
  qtd?: number;
  price?: number;
  value?: number;
}

@Injectable()
export class PositionService {
  constructor(
    @InjectRepository(PositionEntity)
    private readonly positionRepository: Repository<PositionEntity>,
  ) {}

  public async createPosition(
    createPositionDTO: CreatePositionDTO,
    userId: number,
  ): Promise<PositionEntity> {
    const currentPosition = await this.getPositionByAssetAndUserId(
      createPositionDTO,
      userId,
    ).catch(() => undefined);

    if (!currentPosition) {
      return await this.savePosition({
        ...createPositionDTO,
        value: createPositionDTO.qtd * createPositionDTO.price,
        status: POSITION_STATUS_OPENED,
        userId,
      });
    } else {
      return await this.updateCurrentPosition(
        createPositionDTO,
        currentPosition,
      );
    }
  }

  public async getPositionByAssetAndUserId(
    createPositionDTO: CreatePositionDTO,
    userId: number,
  ): Promise<PositionEntity> {
    const position = await this.positionRepository.findOne({
      where: {
        asset: createPositionDTO.asset,
        userId,
        status: POSITION_STATUS_OPENED,
      },
    });

    if (!position) {
      throw new NotFoundException(
        `No opened position were found fot the asset: ${createPositionDTO.asset}`,
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

    if (isPositionAndOrderTheSameType) {
      return await this.handlePositionAndOrderTheSameType(
        createPositionDTO,
        currentPosition,
      );
    } else {
      const orderType =
        currentPosition.type === ORDER_TYPE_BUY
          ? ORDER_TYPE_SELL
          : ORDER_TYPE_BUY;

      return await this.handlePositionAndOrderWithDifferentType(
        createPositionDTO,
        currentPosition,
        orderType,
      );
    }
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
    const {
      qtd: currentQuantity,
      value: currentValue,
      price: currentPrice,
    } = currentPosition;
    const { qtd: orderQuantity, price: orderPrice } = createPositionDTO;

    const newQtd = currentQuantity - orderQuantity;

    if (newQtd > 0) {
      const newValue = currentPrice * newQtd;

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
        status: POSITION_STATUS_CLOSED,
      });
    }
    if (newQtd < 0) {
      const newPrice =
        (currentValue + orderPrice * orderQuantity) /
        (orderQuantity + currentQuantity);
      const newValue = newPrice * Math.abs(newQtd);

      return await this.savePosition({
        id: currentPosition.id,
        qtd: Math.abs(newQtd),
        price: Number(newPrice.toFixed(2)),
        value: Number(newValue.toFixed(2)),
        type: orderType,
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
}
