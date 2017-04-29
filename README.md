# couch-view-keys

## Examples

```sh
url="http://user:pass@localhost:5984/db-name/_design/design-doc-name/_view/view-name"
couch-view-by-keys "$url" keyA keyB keyC
couch-view-by-keys "$url" '["a", "complex", "key"]' '["another", "complex", "key"]'
```
