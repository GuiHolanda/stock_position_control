import { Injectable, NotFoundException } from '@nestjs/common';
import { PositionEntity } from './entities/position.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePositionDTO } from './dtos/createPosition.dto';

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
      return await this.positionRepository.save({
        ...createPositionDTO,
        value: createPositionDTO.qtd * createPositionDTO.price,
        status: 'open',
        userId,
      });
    } else {
      return await this.updateCurrentPosition(
        createPositionDTO,
        userId,
        currentPosition,
      );
    }
  }

  public async getPositionByAssetAndUserId(
    createPositionDTO: CreatePositionDTO,
    userId: number,
  ): Promise<PositionEntity> {
    const position = await this.positionRepository.findOne({
      where: { asset: createPositionDTO.asset, userId, status: 'open' },
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
    userId: number,
    currentPosition: PositionEntity,
  ): Promise<PositionEntity> {
    if (
      currentPosition.type === 'compra' &&
      createPositionDTO.type === 'compra'
    ) {
      const newQtd = currentPosition.qtd + createPositionDTO.qtd;
      const newValue =
        currentPosition.value + createPositionDTO.price * createPositionDTO.qtd;
      const newPrice = Number((newValue / newQtd).toFixed(2));

      return await this.positionRepository.save({
        id: currentPosition.id,
        qtd: newQtd,
        price: newPrice,
        value: newValue,
      });
    }
    if (
      currentPosition.type === 'compra' &&
      createPositionDTO.type === 'venda'
    ) {
      const newQtd = currentPosition.qtd - createPositionDTO.qtd;

      if (newQtd > 0) {
        const newValue = currentPosition.price * newQtd;

        return await this.positionRepository.save({
          id: currentPosition.id,
          qtd: newQtd,
          value: newValue,
        });
      }
      if (newQtd === 0) {
        return await this.positionRepository.save({
          id: currentPosition.id,
          qtd: newQtd,
          price: 0,
          value: 0,
          status: 'closed',
        });
      }
      if (newQtd < 0) {
        const newValue =
          currentPosition.value +
          createPositionDTO.price * createPositionDTO.qtd;
        const newPrice =
          newValue / (createPositionDTO.qtd + currentPosition.qtd);

        return await this.positionRepository.save({
          ...currentPosition,
          qtd: Math.abs(newQtd),
          price: newPrice,
          value: newValue,
          type: 'venda',
        });
      }
      const newValue =
        currentPosition.value - createPositionDTO.price * createPositionDTO.qtd;

      return await this.positionRepository.save({
        ...currentPosition,
        qtd: newQtd,
        value: newValue,
      });
    }
    return;
  }
}
