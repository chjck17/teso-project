import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSource } from 'dataSource';

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   validationSchema: Joi.object({
    //     POSTGRES_HOST: Joi.string().required(),
    //     POSTGRES_PORT: Joi.number().required(),
    //     POSTGRES_USER: Joi.string().required(),
    //     POSTGRES_PASSWORD: Joi.string().required(),
    //     POSTGRES_DB: Joi.string().required(),
    //     synchronize: Joi.bool().required(),
    //     PORT: Joi.number(),
    //   }),
    // }),
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({}),
      dataSourceFactory: async () => dataSource,
    }),
    ProductModule,
    CategoryModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
