const includes = new RegExp(`@pwa/.*(?!.*node_modules)`)
const excludes = new RegExp(`node_modules(?!/@pwa/.*(?!.*node_modules))`)

module.exports = {
  distDir: '../build',
  webpack(config, options) {
    const enhancedConfig = config

    enhancedConfig.resolve.symlinks = false
    enhancedConfig.externals = enhancedConfig.externals.map(external => {
      if (typeof external !== 'function') return external
      return (ctx, req, cb) => (includes.test(req) ? cb() : external(ctx, req, cb))
    })

    enhancedConfig.module.rules.push({
      test: /\.+(js|jsx)$/,
      loader: options.defaultLoaders.babel,
      include: includes
    })

    return enhancedConfig
  },

  webpackDevMiddleware(config) {
    const enhancedConfig = config
    const ignored = [enhancedConfig.watchOptions.ignored[0]].concat(excludes)
    enhancedConfig.watchOptions.ignored = ignored

    return enhancedConfig
  }
}
