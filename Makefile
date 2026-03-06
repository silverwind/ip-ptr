lint:
	pnpm exec eslint-silverwind --color .

lint-fix:
	pnpm exec eslint-silverwind --color . --fix

test: lint
	node --trace-deprecation --throw-deprecation --trace-warnings test.js

publish:
	git push -u --tags origin master
	pnpm publish --no-git-checks

update:
	pnpm exec updates -u
	rm -rf node_modules
	pnpm install

patch: test
	pnpm version patch
	$(MAKE) publish

minor: test
	pnpm version minor
	$(MAKE) publish

major: test
	pnpm version major
	$(MAKE) publish

.PHONY: lint lint-fix test publish update patch minor major
