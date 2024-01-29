#!/bin/bash

# wait for the database to be ready
./wait-for-it.sh -h $DB_HOST -p $DB_PORT -t 15

# Create tables on the database
npm run migrate

# if DEBUG mode then add data to the tables
if [ "$ADD_DATA" = "true" ]; then
    npm run add-data
fi

npm start