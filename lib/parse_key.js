module.exports = (key) => {
  if (!(key && typeof key === 'string')) throw new Error(`invalid key: ${key}`)
  if (key[0] === '[') return JSON.parse(replaceArraySingleQuotes(key))
  if (key[0] === '{') return JSON.parse(replaceObjectSingleQuotes(key))
  return key
}

const replaceArraySingleQuotes = (key) => {
  return key
  // Remove [ and ]
  .slice(1, -1)
  .split(',')
  .map(replacePartEndsSingleQuotes)
  .join(',')
  // Recover [ and ]
  .replace(/^/, '[')
  .replace(/$/, ']')
}

const replaceObjectSingleQuotes = (key) => {
  return key
  // Remove { and }
  .slice(1, -1)
  .split(',')
  .map(keyValue => {
    return keyValue
    .split(':')
    .map(replacePartEndsSingleQuotes)
    .join(':')
  })
  .join(',')
  // Recover [ and ]
  .replace(/^/, '{')
  .replace(/$/, '}')
}

const replacePartEndsSingleQuotes = (part) => {
  return part
  .trim()
  .replace(/^'/, '"')
  .replace(/'$/, '"')
}
