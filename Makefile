NG=./node_modules/@angular/cli/bin/ng

.PHONY: run
run:
	yarn
	$(NG) serve -w -sm -aot

.PHONY: dist
dist:
	yarn
	$(NG) build -bh / --deploy-url /static --prod -aot

.PHONY: clean
clean:
	rm -rv dist

