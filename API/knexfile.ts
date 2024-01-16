import dotenv from 'dotenv';
import { Knex } from 'knex';

dotenv.config();

interface KnexConfig {
  [key: string]: Knex.Config;
}

const config: KnexConfig = {
  development: {
    client: 'mysql2',
    version: '5.7',
    connection: {
      host: '127.0.0.1',
      port: 8080,
      database: 'database',
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
    },
    migrations: {
      directory: 'migrations/',
    },
  },
};

export default config;
