var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  cssModules: {
    camelCase: 'dashesOnly',
    localIdentName: isProduction ? '[hash:base64:5]' : '[path][name]_[local]'
  }
}
