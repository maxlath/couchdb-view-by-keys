# couch-view-by-keys

A command line tool to query [CouchDB](http://couchdb.apache.org/) [views](https://wiki.apache.org/couchdb/Introduction_to_CouchDB_views), focused on easing queries with [complex JSON keys](https://wiki.apache.org/couchdb/Introduction_to_CouchDB_views#Complex_Keys) (which are a pain to do with `curl`)

## Summary

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Install](#install)
- [How-To](#how-to)
  - [Basic use](#basic-use)
  - [Output format](#output-format)
    - [one row per line](#one-row-per-line)
    - [indented JSON](#indented-json)
- [Tips](#tips)
  - [use single quotes in JSON keys](#use-single-quotes-in-json-keys)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install

```sh
npm install -g couch-view-by-keys
```

## How-To

### Basic use
```sh
url="http://username:password@localhost:5984/db-name/_design/design-doc-name/_view/view-name"
couch-view-by-keys "$url" keyA keyB keyC
couch-view-by-keys "$url" '["a", "complex", "key"]' '["another", "complex", "key"]'
# Or from a file with one key per line
cat keys | xargs couch-view-by-keys "$url"
```
Or to fetch many documents
```sh
url="http://username:password@localhost:5984/_all_docs"
couch-view-by-keys "$url" docIdA docIdB docIdC
# Or from a file with one doc id per line
cat ids | xargs couch-view-by-keys "$url"
```

### Output format
#### one row per line
That's the default output format
```sh
couch-view-by-keys "$url" keyA keyB keyC
```
set the indentation to 0 to drop newlines
```sh
couch-view-by-keys "$url" keyA keyB keyC --json 0
```

#### indented JSON
```sh
couch-view-by-keys "$url" keyA keyB keyC --json 2
couch-view-by-keys "$url" keyA keyB keyC --json 4
```

## Tips
### use single quotes in JSON keys
Some times you might need to use variable interpolation, which, in bash, requires to use double quotes. Unfortunately, JSON keys being expected to be valid JSON, they also require doubles quotes. You would thus normally endup with some horrible escaping of the kind:
```sh
couch-view-by-keys "$url" "[\"$1\",\"a\"]" "[\"$2\",\"b\"]" "[\"$3\",\"c\"]"
```
Horrified by so much anticipated pain, you might just stop there, give up on computing and start drinking. But fear no more! You can just use single quotes instead:
```sh
# works with simple arrays
couch-view-by-keys "$url" "['$1','a']" "['$2','b']" "['$3','c']"
# and simple objects
couch-view-by-keys "$url" "{ 'a': '$1'}"
# TODO: make it work for nested objects/arrays if you have the need
```
