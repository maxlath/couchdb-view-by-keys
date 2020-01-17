module.exports = (indentation = 0) => rows => {
  process.stdout.write(JSON.stringify(rows, null, indentation))
  process.stdout.write('\n')
}
