build:
	rm static/bundles/*.js
	yarn build
	yarn build:dev
