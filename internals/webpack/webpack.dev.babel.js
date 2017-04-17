const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const logger = require('../../server/logger')
const cheerio = require('cheerio')
const pkg = require(path.resolve(process.cwd(), 'package.json'))
const dllPlugin = pkg.dllPlugin

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new HtmlWebpackPlugin({
    inject: true,
    templateContent: templateContent()
  }),
  new CircularDependencyPlugin({
    exclude: /a\.js|node_modules/,
    failOnError: false
  })
]

module.exports = require('./webpack.base.babel')({
  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client?reload=true',
    path.join(process.cwd(), 'app/app.js')
  ],

  // Don't use hashes in dev mode for better performance
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },

  // Add development plugins
  plugins: dependencyHandlers().concat(plugins), // eslint-disable-line no-use-before-define
  babelQuery: {
    // require.resolve solves the issue of relative presets when dealing with
    // locally linked packages. This is an issue with babel and webpack.
    // See https://github.com/babel/babel-loader/issues/149 and
    // https://github.com/webpack/webpack/issues/1866
    presets: ['babel-preset-react-hmre'].map(require.resolve)
  },
  devtool: 'cheap-module-eval-source-map',
  performance: {
    hints: false
  }
})

function dependencyHandlers() {
  // Don't do anything during the DLL Build step
  if (process.env.BUILDING_DLL) { return [] }

  if (!dllPlugin) {
    return [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        children: true,
        minChunks: 2,
        async: true
      })
    ]
  }

  const dllPath = path.resolve(process.cwd(), dllPlugin.path || 'node_modules/react-boilerplate-dlls')

  if (!dllPlugin.dlls) {
    const manifestPath = path.resolve(dllPath, 'reactBoilerplateDeps.json')

    if (!fs.existsSync(manifestPath)) {
      logger.error('The DLL manifest is missing. Please run `npm run build:dll`')
      process.exit(0)
    }

    return [
      new webpack.DllReferencePlugin({
        context: process.cwd(),
        manifest: require(manifestPath) // eslint-disable-line global-require
      })
    ]
  }

  const dllManifests = Object.keys(dllPlugin.dlls).map((name) => path.join(dllPath, `/${name}.json`))

  return dllManifests.map((manifestPath) => {
    if (!fs.existsSync(path)) {
      if (!fs.existsSync(manifestPath)) {
        logger.error(`The following Webpack DLL manifest is missing: ${path.basename(manifestPath)}`)
        logger.error(`Expected to find it in ${dllPath}`)
        logger.error('Please run: npm run build:dll')

        process.exit(0)
      }
    }

    return new webpack.DllReferencePlugin({
      context: process.cwd(),
      manifest: require(manifestPath) // eslint-disable-line global-require
    })
  })
}

function templateContent() {
  const html = fs.readFileSync(
    path.resolve(process.cwd(), 'app/index.html')
  ).toString()

  if (!dllPlugin) { return html }

  const doc = cheerio(html)
  const body = doc.find('body')
  const dllNames = !dllPlugin.dlls ? ['reactBoilerplateDeps'] : Object.keys(dllPlugin.dlls)

  dllNames.forEach((dllName) => body.append(`<script data-dll='true' src='/${dllName}.dll.js'></script>`))

  return doc.toString()
}
