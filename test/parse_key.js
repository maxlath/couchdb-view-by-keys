require('should')
const parseKey = require('../lib/parse_key')

describe('parse_key', () => {
  it('should accept JSON array keys with simple quotes', (done) => {
    parseKey("['wdt:P31', 'wd:Q571']").should.deepEqual(['wdt:P31', 'wd:Q571'])
    done()
  })
  it('should accept JSON object keys with simple quotes', (done) => {
    parseKey("{'wdt:P31': 'wd:Q571'}").should.deepEqual({'wdt:P31': 'wd:Q571'})
    done()
  })
})
