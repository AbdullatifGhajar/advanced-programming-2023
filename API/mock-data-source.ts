import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const MockDataSource = new DataSource({
  type: 'sqljs',
  synchronize: true,
  logging: false,
  dropSchema: true, // Isolate each test case
  entities: ['**/src/entity/**/*.ts'],
});

export default MockDataSource;
