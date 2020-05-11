const defaultQuery = { include_docs: true, reduce: false }

module.exports = query => {
  Object.keys(query).forEach(key => {
    const value = query[key]
    if (value === 'true') query[key] = true
    if (value === 'false') query[key] = false
  })

  if (query.limit != null) query.limit = parseInt(query.limit)
  if (query.skip != null) query.skip = parseInt(query.skip)

  return Object.assign({}, defaultQuery, query)
}
