module.exports = (key) => {
  if (!(key && typeof key === 'string')) throw new Error(`invalid key: ${key}`)
  if (key[0] === '[' || key[0] === '{') return JSON.parse(key)
  return key
}
