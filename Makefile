## Minimal startup
start:
	docker-compose up -d

## Stop
stop:
	docker-compose down

## Restart
restart:
	docker-compose down
	sleep 2
	docker-compose up --build -d
