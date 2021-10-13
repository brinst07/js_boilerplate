import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { UserDto } from './userDto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  async signUp(userDto: UserDto) {
    const { email, username, password } = userDto;
    //bcrypt를 사용하여 비밀번호 암호화
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = this.create({ email, username, password: hashedPassword });
    try {
      await this.save(user);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Existing email');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
