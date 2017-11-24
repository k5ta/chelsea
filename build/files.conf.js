const fs = require('fs')
const path = require('path')
const utils = require('./utils')
const name = utils.assetsPath('media/[name].[ext]')

const svgSpriteDirectoriesNames = utils.getDirectories(path.resolve(__dirname, '../src/assets/vector'))
const svgSpriteDirectoriesPaths = svgSpriteDirectoriesNames.map(directoryName => path.resolve(__dirname, '../src/assets/vector', directoryName))

const svgoConfig = (removeAttrsRegex) => ({
  loader: require.resolve('image-webpack-loader'),
  options: {
    svgo: {
      plugins: [
        { removeStyleElement: true },
        { removeAttrs: {attrs: [removeAttrsRegex, '^(?!.*symbol).*$:(id)'] }}
      ]
    }
  }
})

const svgSpriteConfig = svgSpriteDirectoriesNames.map((directoryName, i) => ({
    test: /\.svg$/,
    include: svgSpriteDirectoriesPaths[i],
    use: [
      {
        loader: require.resolve('svg-sprite-loader'),
        options: {
          extract: true,
          spriteFilename: utils.assetsPath('media/' + directoryName + '.[hash:7].svg')
        }
      }
    ].concat(svgoConfig('(class|fill|stroke)'))
  })
)

module.exports = [
  {
    // ** ADDING/UPDATING LOADERS **
    // The "file" loader handles all assets unless explicitly excluded.
    // The `exclude` list *must* be updated with every change to loader extensions.
    // When adding a new loader, you must add its `test`
    // as a new entry in the `exclude` list in the "file" loader.

    // "file" loader makes sure those assets end up in the `build` folder.
    // When you `import` an asset, you get its filename.
    exclude: [
      /\.html$/,
      /\.js$/,
      /\.vue$/,
      /\.styl$/,
      /\.css$/,
      /\.json$/,
      /\.bmp$/,
      /\.gif$/,
      /\.jpe?g$/,
      /\.png$/,
      /\.svg$/,
    ],
    loader: require.resolve('file-loader'),
    options: { name },
  },
  // "url" loader works like "file" loader except that it embeds assets
  // smaller than specified limit in bytes as data URLs to avoid requests.
  // A missing `test` is equivalent to a match.
  {
    test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
    use: [
      {
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name
        }
      },
      {
        loader: require.resolve('image-webpack-loader'),
        options: {
          progressive: true,
          mozjpeg: {
            quality: 90
          }
        }
      }
    ]
  },
  {
    test: /\.svg$/,
    exclude: svgSpriteDirectoriesPaths,
    use: [
      {
        loader: require.resolve('svg-inline-loader')
      }
    ].concat(svgoConfig('(fill|stroke)'))
  }
].concat(svgSpriteConfig)
