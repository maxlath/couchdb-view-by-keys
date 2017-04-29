module.exports = (indentation = 0) => (rows ) => {
  console.log('indentation')
  console.log(JSON.stringify(rows, null, indentation))
}
