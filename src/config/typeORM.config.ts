import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'formsdb',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true //to prevent changes turn this to false
};