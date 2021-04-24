# couchdb-view-by-keys

A command line tool to query [CouchDB](http://couchdb.apache.org/) [views](https://wiki.apache.org/couchdb/Introduction_to_CouchDB_views), focused on easing queries with [complex JSON keys](https://wiki.apache.org/couchdb/Introduction_to_CouchDB_views#Complex_Keys) (which are a pain to do with `curl`)

[![NPM](https://nodei.co/npm/couchdb-view-by-keys.png?stars&downloads&downloadRank)](https://npmjs.com/package/couchdb-view-by-keys/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node](https://img.shields.io/badge/node-%3E=%20v7.6.0-brightgreen.svg)](http://nodejs.org)

## Summary

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Install](#install)
- [How-To](#how-to)
  - [General](#general)
  - [Get rows](#get-rows)
  - [Get docs](#get-docs)
  - [Get keys](#get-keys)
  - [Get values](#get-values)
  - [Get only view rows id and key](#get-only-view-rows-id-and-key)
  - [Limit](#limit)
  - [Skip](#skip)
  - [Output format](#output-format)
    - [newline-delimited JSON](#newline-delimited-json)
    - [JSON](#json)
- [Tips](#tips)
  - [use single quotes in JSON keys](#use-single-quotes-in-json-keys)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install

```sh
npm install -g couchdb-view-by-keys
```

## How-To

### General
```sh
url="http://username:password@localhost:5984/db-name/_design/design-doc-name/_view/view-name"
couchdb-view-by-keys "$url" keyA keyB keyC
couchdb-view-by-keys "$url" '["a", "complex", "key"]' '["another", "complex", "key"]'
# Or from a file with one key per line
cat keys | xargs couchdb-view-by-keys "$url"
```
Or to fetch many documents
```sh
url="http://username:password@localhost:5984/_all_docs"
couchdb-view-by-keys "$url" docIdA docIdB docIdC
# Or from a file with one doc id per line
cat ids | xargs couchdb-view-by-keys "$url"
```

### Get rows
couchdb-view-by-keys "$url"

### Get docs
couchdb-view-by-keys --docs "$url"

### Get keys
couchdb-view-by-keys --keys "$url"

### Get values
couchdb-view-by-keys --values "$url"

### Get only view rows id and key
By default, view rows are returned with their document, but this can be disabled by setting `include_docs=false`
```sh
couchdb-view-by-keys "${url}?include_docs=false"
```

NB: `reduce=false` is also set by default, as `reduce=true` is incompatible with `include_docs=true`

### Limit
```sh
couchdb-view-by-keys "${url}?limit=10"
```

### Skip
```sh
couchdb-view-by-keys "${url}?skip=10"
```

### Output format
#### newline-delimited JSON
Newline-delimited JSON (a.k.a NDJSON) is the the default output format
```sh
couchdb-view-by-keys "$url" keyA keyB keyC
```
set the indentation to 0 to drop newlines
```sh
couchdb-view-by-keys "$url" keyA keyB keyC --json 0
```

#### JSON
```sh
# Get all the rows as an array of object
couchdb-view-by-keys "$url" keyA keyB keyC --json
# Same, but with an indentation of 2
couchdb-view-by-keys "$url" keyA keyB keyC --json 2
# Same, but with an indentation of 4
couchdb-view-by-keys "$url" keyA keyB keyC --json 4
```

## Tips
### use single quotes in JSON keys
Some times you might need to use variable interpolation, which, in bash, requires to use double quotes. Unfortunately, JSON keys being expected to be valid JSON, they also require doubles quotes. You would thus normally endup with some horrible escaping of the kind:
```sh
couchdb-view-by-keys "$url" "[\"$1\",\"a\"]" "[\"$2\",\"b\"]" "[\"$3\",\"c\"]"
```
Horrified by so much anticipated pain, you might just stop there, give up on computing and start drinking. But fear no more! You can just use single quotes instead:
```sh
# works with simple arrays
couchdb-view-by-keys "$url" "['$1','a']" "['$2','b']" "['$3','c']"
# and simple objects
couchdb-view-by-keys "$url" "{ 'a': '$1'}"
# TODO: make it work for nested objects/arrays if you have the need
```
