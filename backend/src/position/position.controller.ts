import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PositionEntity } from './entities/position.entity';
import { CreatePositionDTO } from './dtos/createPosition.dto';
import { UserId } from '../decorators/user_id.decorator';
import { Roles } from '../decorators/role.decorator';
import { UserType } from '../user/enum/user_type.enum';
import { PositionService } from './position.service';

@Controller('position')
export class PositionController {
  constructor(private readonly positionService: PositionService) {}

  @UsePipes(ValidationPipe)
  @Roles(UserType.User, UserType.Admin)
  @Post()
  async createPosition(
    @Body() createPositionDTO: CreatePositionDTO,
    @UserId() userId: number,
  ): Promise<PositionEntity> {
    const position = await this.positionService.createPosition(
      createPositionDTO,
      userId,
    );

    return position;
  }

  @Roles(UserType.User, UserType.Admin)
  @Get('/:asset')
  async getPositionByAssetAndUserId(
    @Body() createPositionDTO: CreatePositionDTO,
    @UserId() userId: number,
  ): Promise<PositionEntity> {
    return;
  }
}
