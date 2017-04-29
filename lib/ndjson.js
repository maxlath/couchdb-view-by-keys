module.exports = (rows) => {
  console.log('[')
  rows.slice(0, -1).forEach(row => logLine(row, true))
  rows.slice(-1).forEach(row => logLine(row, false))
  console.log(']')
}

const logLine = (row, withComma) => {
  const comma = withComma ? ',' : ''
  console.log(JSON.stringify(row) + comma)
}
