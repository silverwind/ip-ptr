test:
	$(MAKE) lint
	node --throw-deprecation --trace-warnings --trace-deprecation test.js

lint:
	node_modules/.bin/eslint *.js

publish:
	git push -u --tags origin master
	npm publish

update:
	node_modules/.bin/updates -u
	rm -rf node_modules
	yarn

npm-patch:
	npm version patch

npm-minor:
	npm version minor

npm-major:
	npm version major

patch: lint test npm-patch publish
minor: lint test npm-minor publish
major: lint test npm-major publish

.PHONY: test lint publish update npm-patch npm-minor npm-major patch minor major
