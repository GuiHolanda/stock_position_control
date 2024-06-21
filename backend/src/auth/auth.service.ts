import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { ReturnUserDTO } from '../user/dtos/returnUser.dto';
import { LoginPayload } from './dtos/loginPayload.dto';
import { validatePassword } from '../utils/password';
import { LoginDTO } from './dtos/login.dto';
import { ReturnLoginDTO } from './dtos/returnLogin.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(loginDTO: LoginDTO): Promise<ReturnLoginDTO> {
    const user: UserEntity | undefined = await this.userService
      .getUserByEmail(loginDTO.email)
      .catch(() => undefined);

    const isMatch = await validatePassword(
      loginDTO.password,
      user?.password || '',
    );

    if (!user || !isMatch) {
      throw new NotFoundException('Invalid email or password');
    }

    const payload = {
      ...new LoginPayload(user),
      expirationDate: new Date(Date.now() + 60 * 1000),
    };

    return {
      accessToken: this.jwtService.sign(payload),
      user: new ReturnUserDTO(user),
    };
  }
}
