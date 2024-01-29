import 'reflect-metadata';
import { DataSource } from 'typeorm';

import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

if (process.env.PROD_ENV === 'true') {
  console.log('PROD_ENV is true, using prod db on docker container');
} else {
  console.log('PROD_ENV is false, using local test db');
  process.env.DB_CONTAINER_NAME = 'localhost';
}

const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_CONTAINER_NAME!,
  port: parseInt(process.env.DB_PORT!),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: 'database',
  synchronize: true,
  logging: false,
  entities: ['**/src/entity/**/*.ts'],
});

export default AppDataSource;
