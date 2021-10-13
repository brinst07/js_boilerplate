import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserDto } from './userDto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../config/jwt-payload.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signIn(userDto: UserDto): Promise<string> {
    const { email, password } = userDto;
    const user = await this.userRepository.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      user.lastLoginAt = new Date();
      await this.userRepository.update({ email: user.email }, user);

      const payload: JwtPayload = { email };
      const accessToken = this.jwtService.sign(payload);
      return accessToken;
    } else {
      throw new UnauthorizedException('login failed');
    }
  }

  async signUp(userDto: UserDto) {
    await this.userRepository.signUp(userDto);
  }
}
