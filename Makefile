include .env

.ONESHELL:
BACKEND_DIR = API
FRONTEND_DIR = app
INTEGRATION_TESTS_DIR = integration-tests

.PHONY: install
install:			## Install requirements for both backend and frontend
	@echo "-------- Installing common requirements --------"
	@npm install
	
	@echo "-------- Installing requirements in the backend --------"
	@cd $(BACKEND_DIR) && npm install
	@cd ..

	@echo "-------- Installing requirements in the frontend --------"
	@cd $(FRONTEND_DIR) && npm install
	@cd ..

	@echo "-------- Installing requirements in the integration tests --------"
	@cd $(INTEGRATION_TESTS_DIR) && npm install
	@cd ..

.PHONY: run-backend
run-backend:			## Run the backend
	@echo "-------- Running the backend --------"
	@cd $(BACKEND_DIR) && npm start
	@cd ..

.PHONY: run-frontend
run-frontend:			## Run the frontend
	@echo "-------- Running the frontend --------"
	@cd $(FRONTEND_DIR) && npm start
	@cd ..

.PHONY: install-db
install-db:			## Install the database
	@echo "------- Installing the database --------"
	@cd $(BACKEND_DIR)
	@docker run --detach --name db --env MARIADB_USER=$(DB_USERNAME) --env MARIADB_PASSWORD=$(DB_PASSWORD) --env MARIADB_DATABASE=database --env MARIADB_ROOT_PASSWORD=root -p 8080:3306  mariadb:latest
	
	@echo "------- Add tables to the database --------"
	@rm -rf $(BACKEND_DIR)/migrations/**.ts
	@sleep 5

	@npm run create-migration
	@npm run migrate
	@npm run add-data
	
.PHONY: update-db
update-db:			## Update the database
	@cd $(BACKEND_DIR)
	@npm run clear-data
	@npm run create-migration
	@npm run migrate
	@npm run add-data


.PHONY: add-data
add-data:			## Add data to the database
	@echo "------- Adding data to the database --------"
	@cd $(BACKEND_DIR)
	@npm run add-data

.PHONY: lint
lint:				## Run the the formatter and the linter
	@echo "------- Running the Formatter --------"
	@npm run format
	@echo "------- Running the Linter --------"
	@npm run lint

.PHONY: test-integration
test-integration:	## Run the integration tests
	@echo "------- Running the integration tests --------"
	@echo "MAKE SURE THE APP IS RUNNING"
	@cd $(INTEGRATION_TESTS_DIR)
	@npx playwright test

.PHONY: help
help:            		## Show the help
	@echo "Usage: make <target>"
	@echo ""
	@echo "Targets:"
	@fgrep "##" Makefile | fgrep -v fgrep
