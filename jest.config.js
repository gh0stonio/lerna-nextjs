module.exports = {
  collectCoverageFrom: [
    'packages/**/src/redux/**/*.js',
    '!packages/**/src/redux/index.js',
    'packages/**/src/sagas/**/*.js',
    'packages/**/src/selectors/**/*.js',
    'packages/**/src/utils/**/*.js'
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  },
  resetMocks: true,
  verbose: true
}
