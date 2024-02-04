# Advanced Programming Project

## Install

### Dependencies

To install the dependencies, run `make install`

### Database

To install the database, run `make install-db`. This will create a container with the database and add test data.

## Run

### Makefile

To run the project, you need to run the frontend and backend separately.
Make sure you installed the database using `make install-db`.

Open two terminals and run the following commands in each of them.
`make run-backend` and `make run-frontend`

### Docker-Compose

To run the project with docker-compose, run `make docker-start`. 
To stop the project, just run `make docker-stop`.

## Test

### Unit Tests

To run the unit tests in both frontend or backend, navigate to their folders and run `npm run test`.

### Integration Tests

To run the integration tests using Playwright, make sure you have the app running (see the Run section).
Now run the tests using `make test-integration`.

