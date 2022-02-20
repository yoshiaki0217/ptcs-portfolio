.DEFAULT_GOAL := help

serve:
	docker-compose up php mysql nginx

login: ## [dev] php container をlocalhost:8000で起動する
	docker exec -it php /bin/bash