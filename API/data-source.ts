import { DataSource } from "typeorm";

require('dotenv').config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 8080,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "database",
    synchronize: false,
    logging: false,
    entities: [
        "**/src/entity/**/*.ts"
    ],
    migrations: [
        "migration/*.ts"
    ],
    subscribers: [
        "src/subscriber/**/*.ts"
    ]
});

module.exports = {
    AppDataSource
};