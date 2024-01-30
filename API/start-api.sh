#!/bin/bash

# wait for the database to be ready
./wait-for-it.sh -h $DB_HOST -p $DB_PORT -t 15

# Check if this is the first run
if [ ! -f "already_built" ]; then
  # Create tables on the database
  npm run migrate

  # if ADD_DATA is set then add data to the tables
  if [ "$ADD_DATA" = "true" ]; then
      npm run add-data
  fi

  # Create a flag file to indicate first run is done
  touch already_built
fi

npm start