# couch-view-keys

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
