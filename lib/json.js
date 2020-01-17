module.exports = (indentation = 0) => rows => {
  console.log(JSON.stringify(rows, null, indentation))
}
