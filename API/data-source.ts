import 'reflect-metadata';
import { DataSource } from 'typeorm';

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
  migrations: ['migrations/*.ts', 'migrations/'],
  subscribers: ['src/subscriber/*.ts'],
});

export default AppDataSource;
