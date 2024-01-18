import 'reflect-metadata';
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

const AppDataSource = new DataSource({
  type: 'mysql',
  host: '127.0.0.1',
  port: 8080,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: 'database',
  synchronize: true,
  logging: false,
  entities: ['**/src/entity/**/*.ts'],
  migrations: ['migrations/*.ts', 'migrations/'],
  subscribers: ['src/subscriber/*.ts'],
});

export default AppDataSource;
