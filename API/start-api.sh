#!/bin/bash
sleep 5
./run-migrations.sh
./add-test-data.sh
npm start