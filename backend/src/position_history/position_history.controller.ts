import { Controller, Get } from '@nestjs/common';
import { UserId } from '../decorators/user_id.decorator';
import { PositionHistoryDTO } from './dtos/position_history.dto';
import { PositionHistoryService } from './position_history.service';

@Controller('position-history')
export class PositionHistoryController {
  constructor(
    private readonly positionHistoryService: PositionHistoryService,
  ) {}

  @Get()
  async getPositionHistoryByUserId(
    @UserId() userId: number,
  ): Promise<PositionHistoryDTO[]> {
    return await this.positionHistoryService.getPositionHistoryByUserId(userId);
  }
}
