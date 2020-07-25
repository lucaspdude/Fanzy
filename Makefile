all: up
up:
	docker-compose up
down:
	docker-compose down
rebuild:
	docker-compose build
down-all:
	docker-compose down -v --rmi all
