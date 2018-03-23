const args = process.argv.slice(2)

const isPreprod = args.indexOf('--preprod') > -1
const isProd = args.indexOf('--prod') > -1

global.__PREPRODUCTION__ = isPreprod
global.__PRODUCTION__ = isProd
global.__VERSION__ = `"${require('../../package.json').version}"`

require('./main')
