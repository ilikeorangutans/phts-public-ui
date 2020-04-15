NG=./node_modules/@angular/cli/bin/ng
SOURCES=$(shell find ./src -type f -iname '*.ts' -or -iname '*.html' -or -iname '*.css') tsconfig.json tslint.json yarn.lock package.json

.PHONY: run
run:
	yarn
	$(NG) serve -w -sm -aot

dist: $(SOURCES)
	yarn
	$(NG) build -bh / --deploy-url /static --prod -aot

.PHONY: clean
clean:
	rm -rv dist

