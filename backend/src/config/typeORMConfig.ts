import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mariadb',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'q1w2e3r4!',
  database: 'toy',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
