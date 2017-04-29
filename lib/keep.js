const pick = require('lodash.pick')

module.exports = (keep) => (rows) => {
  if (keep) {
    keep = keep.split(',').map(trim)
    return rows.map(row => pick(row, keep))
  } else {
    return rows
  }
}

const trim = (str) => str.trim()
