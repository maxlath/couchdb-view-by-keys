const _ = require('lodash')

module.exports = (keep) => (rows) => {
  if (keep) {
    keep = keep.split(',').map(trim)
    return rows.map(row => pick(row, keep))
  } else {
    return rows
  }
}

const pick = (row, keep) => {
  const output = {}
  keep.forEach(key => {
    _.set(output, key, _.get(row, key))
  })
  return output
}

const trim = (str) => str.trim()
