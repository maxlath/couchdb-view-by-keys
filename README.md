# couch-view-by-keys

A command line tool to query [CouchDB](http://couchdb.apache.org/) [views](https://wiki.apache.org/couchdb/Introduction_to_CouchDB_views), focused on easing queries with [complex JSON keys](https://wiki.apache.org/couchdb/Introduction_to_CouchDB_views#Complex_Keys) (which are a pain to do with `curl`)

## Install

```sh
npm install -g couch-view-by-keys
```

## Examples

```sh
url="http://user:pass@localhost:5984/db-name/_design/design-doc-name/_view/view-name"
couch-view-by-keys "$url" keyA keyB keyC
couch-view-by-keys "$url" '["a", "complex", "key"]' '["another", "complex", "key"]'

couch-view-by-keys "$url" keyA keyB keyC
// => outputs one row per line by default

couch-view-by-keys "$url" keyA keyB keyC --json 0
// => outputs rows as JSON without indentation

couch-view-by-keys "$url" keyA keyB keyC --json 2
// => outputs rows as JSON with indentation = 2

couch-view-by-keys "$url" keyA keyB keyC --json 4
// => outputs rows as JSON with indentation = 4
```
