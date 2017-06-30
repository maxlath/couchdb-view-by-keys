const set = require('lodash.set')
const get = require('lodash.get')

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
  keep.forEach(key => set(output, key, get(row, key)))
  return output
}

const trim = (str) => str.trim()
