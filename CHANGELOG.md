# CHANGELOG
*versions follow [SemVer](http://semver.org)*

## 4.1.0 - 2021-04-24
* Add `--keys` option

## 4.0.0 - 2020-05-11
* renamed module 'couch-view-by-keys'
* BREAKING CHANGE: repurposed the `-d` option to be short for `--docs` (instead of `--debug`)
* Add `-d, --docs` and `-v, --values` option
* Set `'reduce=false` by default

## 3.0.0 - 2020-01-17
* BREAKING CHANGE: made the output consistent: all request return row data, instead of having some request return docs only

## 2.0.0 - 2020-01-17
* BREAKING CHANGE: the default format is now newline-delimited JSON, each line is a valid JSON object
* Added support for using `_all_docs` instead of a views
