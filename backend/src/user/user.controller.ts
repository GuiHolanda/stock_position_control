import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';
import { UserId } from '../decorators/user_id.decorator';
import { UserType } from './enum/user_type.enum';
import { Roles } from '../decorators/role.decorator';
import { CreateUserDTO } from './dtos/createUser.dtos';
import { ReturnUserDTO } from './dtos/returnUser.dto';
import { UpdatePasswordDTO } from './dtos/updatePassword.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async createUser(@Body() createUser: CreateUserDTO): Promise<UserEntity> {
    return this.userService.createUser(createUser);
  }

  @Roles(UserType.Admin)
  @Get()
  async getAllUsers(): Promise<ReturnUserDTO[]> {
    return (await this.userService.getAllUsers()).map(
      (userEntity) => new ReturnUserDTO(userEntity),
    );
  }

  @Roles(UserType.User, UserType.Admin)
  @Get('/:userId')
  async getUserById(@Param('userId') userId: number): Promise<ReturnUserDTO> {
    const user = await this.userService.getUserWithRelations(userId);
    return new ReturnUserDTO(user);
  }

  @Roles(UserType.User, UserType.Admin)
  @Patch()
  @UsePipes(ValidationPipe)
  async updateUserPassword(
    @Body() updatePasswordDTO: UpdatePasswordDTO,
    @UserId() userId: number,
  ): Promise<UserEntity> {
    return this.userService.updatePassword(updatePasswordDTO, userId);
  }
}
