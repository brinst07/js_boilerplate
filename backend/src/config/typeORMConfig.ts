import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mariadb',
  host: 'mariadb',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'toy',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
