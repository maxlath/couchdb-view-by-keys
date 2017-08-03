const qs = require('querystring')
const defaultQuery = { include_docs: true }

module.exports = (url) => {
  const querystring = url.split('?')[1]

  if (!querystring) return {}

  const query = qs.parse(querystring)

  Object.keys(query).forEach(key => {
    const value = query[key]
    if (value === 'true') query[key] = true
    if (value === 'false') query[key] = false
  })

  return Object.assign({}, defaultQuery, query)
}
