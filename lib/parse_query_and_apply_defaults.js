const defaultQuery = { include_docs: true }

module.exports = (query) => {
  Object.keys(query).forEach(key => {
    const value = query[key]
    if (value === 'true') query[key] = true
    if (value === 'false') query[key] = false
  })

  return Object.assign({}, defaultQuery, query)
}
