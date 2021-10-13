import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '../config/jwt.strategy';

@Module({
  imports: [
    //Passport : JWT를 이용해서 인증처리하는 과정을 훨씬 쉽게 만들어줌
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'q1w2e3r4!',
      signOptions: {
        expiresIn: 60 * 60,
      },
    }),
    TypeOrmModule.forFeature([UserRepository]),
  ],
  controllers: [UserController],
  //JwtStrategy를 이 user 모듈에서 사용할수 있게 등록
  providers: [UserService, JwtStrategy],
  //JwtStrategy, PassportModule를 다른 모듈에서 사용할수있게 등록
  exports: [JwtStrategy, PassportModule],
})
export class UserModule {}
