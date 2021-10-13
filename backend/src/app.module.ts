import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './config/typeORMConfig';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), UserModule],
})
export class AppModule {}
