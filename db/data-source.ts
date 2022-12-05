import { ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Category } from '../src/category/entities/category.entity';
const configService = new ConfigService();
export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: configService.get('POSTGRES_HOST'),
  port: configService.get('POSTGRES_PORT'),
  username: configService.get('POSTGRES_USER'),
  password: configService.get('POSTGRES_PASSWORD'),
  database: configService.get('POSTGRES_DB'),
  entities: ['dist/**/entities/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
  logging: true,
};
const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
