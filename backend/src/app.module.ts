import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './config/typeORMConfig';
import { FileController } from './file/file.controller';
import { FileService } from './file/file.service';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), UserModule],
  controllers: [FileController],
  providers: [FileService],
})
export class AppModule {}
