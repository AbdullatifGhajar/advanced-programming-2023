#!/bin/bash
sleep 5

# Create tables on the database
npm run create-migration
npm run migrate

# Check if DEBUG then add data to the tables
if [ "$DEBUG" = "true" ]; then
    npm run clear-data
    npm run add-data
fi

npm start