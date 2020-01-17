module.exports = rows => {
  rows.forEach(row => process.stdout.write(JSON.stringify(row) + '\n'))
}
