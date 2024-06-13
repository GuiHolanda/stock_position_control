import { Test, TestingModule } from '@nestjs/testing';
import { PositionHistoryController } from './position_history.controller';

describe('PositionHistoryController', () => {
  let controller: PositionHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PositionHistoryController],
    }).compile();

    controller = module.get<PositionHistoryController>(PositionHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
