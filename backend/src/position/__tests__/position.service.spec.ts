import { Test, TestingModule } from '@nestjs/testing';
import { PositionService } from '../position.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PositionEntity } from '../entities/position.entity';
import { Repository } from 'typeorm';
import { CreatePositionDTO } from '../dtos/createPosition.dto';
import { ORDER_TYPE_BUY, ORDER_TYPE_SELL } from '../../utils/constants';
import { PositionHistoryService } from '../../position_history/position_history.service';
import { ProfitAndLossesService } from '../../profit_and_losses/profit_and_losses.service';

const currentPositionMock: PositionEntity = {
  id: 1,
  userId: 1,
  asset: 'PETR4',
  type: ORDER_TYPE_BUY,
  market: 'Mercado a Vista',
  qtd: 500,
  price: 22,
  value: 11000,
  createdAt: new Date(),
  updatedAt: new Date(),
};

const createPositionMock: CreatePositionDTO = {
  asset: 'PETR4',
  type: ORDER_TYPE_BUY,
  market: 'Mercado a Vista',
  qtd: 300,
  price: 21,
};

describe('PositionService', () => {
  let service: PositionService;
  let positionRepository: Repository<PositionEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PositionService,
        {
          provide: getRepositoryToken(PositionEntity),
          useValue: {
            findOne: jest.fn().mockResolvedValue(currentPositionMock),
            save: jest.fn().mockResolvedValue(currentPositionMock),
          },
        },
        {
          provide: PositionHistoryService,
          useValue: {
            addNewPositionHistory: jest
              .fn()
              .mockResolvedValue(currentPositionMock),
          },
        },
        {
          provide: ProfitAndLossesService,
          useValue: {
            saveProfitOrLoss: jest.fn().mockResolvedValue(currentPositionMock),
          },
        },
      ],
    }).compile();

    service = module.get<PositionService>(PositionService);
    positionRepository = module.get<Repository<PositionEntity>>(
      getRepositoryToken(PositionEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(positionRepository).toBeDefined();
  });

  it('should handle position and order of the same type correctly', async () => {
    const saveSpy = jest.spyOn(positionRepository, 'save');

    await service.updateCurrentPosition(
      createPositionMock,
      currentPositionMock,
    );

    expect(saveSpy).toHaveBeenCalledWith({
      id: currentPositionMock.id,
      price: 21.63,
      qtd: 800,
      value: 17304,
    });
  });

  it('should handle bought position and sell order with newQtd > 0 correctly', async () => {
    const saveSpy = jest.spyOn(positionRepository, 'save');

    const newOrder: CreatePositionDTO = {
      ...createPositionMock,
      qtd: 300,
      price: 23,
      type: ORDER_TYPE_SELL,
    };

    await service.updateCurrentPosition(newOrder, currentPositionMock);

    expect(saveSpy).toHaveBeenCalledWith({
      id: currentPositionMock.id,
      qtd: 200,
      value: 4400,
    });
  });

  it('should handle bought position and sell order with newQtd = 0 correctly', async () => {
    const saveSpy = jest.spyOn(positionRepository, 'save');

    const newOrder: CreatePositionDTO = {
      ...createPositionMock,
      qtd: 500,
      price: 22,
      type: ORDER_TYPE_SELL,
    };

    await service.updateCurrentPosition(newOrder, currentPositionMock);

    expect(saveSpy).toHaveBeenCalledWith({
      id: currentPositionMock.id,
      qtd: 0,
      value: 0,
    });
  });

  it('should handle bought position and sell order with newQtd < 0 correctly', async () => {
    const saveSpy = jest.spyOn(positionRepository, 'save');

    const newOrder: CreatePositionDTO = {
      ...createPositionMock,
      qtd: 800,
      price: 25,
      type: ORDER_TYPE_SELL,
    };

    await service.updateCurrentPosition(newOrder, currentPositionMock);

    expect(saveSpy).toHaveBeenNthCalledWith(1, {
      id: currentPositionMock.id,
      price: currentPositionMock.price,
      qtd: 0,
      value: 0,
    });

    const newQtd = newOrder.qtd - currentPositionMock.qtd;

    expect(saveSpy).toHaveBeenNthCalledWith(2, {
      price: newOrder.price,
      qtd: newQtd,
      value: newOrder.price * newQtd,
      type: newOrder.type,
      userId: currentPositionMock.userId,
      asset: currentPositionMock.asset,
      market: currentPositionMock.market,
    });
  });

  it('should handle sold position and buy order with newQtd > 0 correctly', async () => {
    const saveSpy = jest.spyOn(positionRepository, 'save');

    const newOrder: CreatePositionDTO = {
      ...createPositionMock,
      qtd: 300,
      price: 23,
    };

    await service.updateCurrentPosition(newOrder, {
      ...currentPositionMock,
      type: ORDER_TYPE_SELL,
    });

    expect(saveSpy).toHaveBeenCalledWith({
      id: currentPositionMock.id,
      qtd: 200,
      value: 4400,
    });
  });

  it('should handle sold position and buy order with newQtd = 0 correctly', async () => {
    const saveSpy = jest.spyOn(positionRepository, 'save');

    const newOrder: CreatePositionDTO = {
      ...createPositionMock,
      qtd: 500,
      price: 23,
    };

    await service.updateCurrentPosition(newOrder, {
      ...currentPositionMock,
      type: ORDER_TYPE_SELL,
    });

    expect(saveSpy).toHaveBeenCalledWith({
      id: currentPositionMock.id,
      qtd: 0,
      value: 0,
    });
  });

  it('should handle sold position and buy order with newQtd < 0 correctly', async () => {
    const saveSpy = jest.spyOn(positionRepository, 'save');

    const newOrder: CreatePositionDTO = {
      ...createPositionMock,
      qtd: 800,
      price: 25,
    };

    await service.updateCurrentPosition(newOrder, {
      ...currentPositionMock,
      type: ORDER_TYPE_SELL,
    });

    expect(saveSpy).toHaveBeenNthCalledWith(1, {
      id: currentPositionMock.id,
      price: currentPositionMock.price,
      qtd: 0,
      value: 0,
    });

    const newQtd = newOrder.qtd - currentPositionMock.qtd;

    expect(saveSpy).toHaveBeenNthCalledWith(2, {
      price: newOrder.price,
      qtd: newQtd,
      value: newOrder.price * newQtd,
      type: newOrder.type,
      userId: currentPositionMock.userId,
      asset: currentPositionMock.asset,
      market: currentPositionMock.market,
    });
  });
});
