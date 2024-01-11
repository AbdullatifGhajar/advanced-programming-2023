// Update with your config settings.
require('dotenv').config()
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'mysql2',
    version: '5.7',
    connection: {
    host : '127.0.0.1',
    port : 8080,
      database: 'database',
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD
    },
    migrations: {
      directory: 'migrations/'
    }
  }
};
