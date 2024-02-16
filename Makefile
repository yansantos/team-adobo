## Minimal startup
start:
	docker-compose up -d

## Stop
stop:
	docker-compose down

## Restart
restart:
	docker-compose restart

## Login to docker container
sh:
	docker exec -it adobo sh