import { Test, TestingModule } from '@nestjs/testing';
import { ProfitAndLossesService } from './profit_and_losses.service';

describe('ProfitAndLossesService', () => {
  let service: ProfitAndLossesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfitAndLossesService],
    }).compile();

    service = module.get<ProfitAndLossesService>(ProfitAndLossesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
