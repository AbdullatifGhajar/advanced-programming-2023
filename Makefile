.ONESHELL:
BACKEND_DIR = API
FRONTEND_DIR = app

.PHONY: install
install:			## Install requirements for both backend and frontend
	@echo "-------- Installing requirements in the backend --------"
	@cd $(BACKEND_DIR) && npm install
	@cd ..

	@echo "-------- Installing requirements in the frontend --------"
	@cd $(FRONTEND_DIR) && npm install
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

.PHONY: help
help:            		## Show the help
	@echo "Usage: make <target>"
	@echo ""
	@echo "Targets:"
	@fgrep "##" Makefile | fgrep -v fgrep
