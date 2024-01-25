import 'reflect-metadata';
import { DataSource } from 'typeorm';


const AppDataSource = new DataSource({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'DB_USERNAME',
  password: 'DB_PASSWORD',
  database: 'database',
  synchronize: true,
  logging: false,
  entities: ['**/src/entity/**/*.ts'],
  migrations: ['migrations/*.ts', 'migrations/'],
  subscribers: ['src/subscriber/*.ts'],
});

export default AppDataSource;
