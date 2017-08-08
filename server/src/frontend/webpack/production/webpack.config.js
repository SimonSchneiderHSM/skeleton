'use strict';

require('babel-polyfill');

var fs = require('fs');
var path = require('path');
var Webpack = require('webpack');
var assetsPath = path.resolve(path.normalize(process.cwd()), './dist/frontend/static/dist');
var appRoot = path.normalize(process.cwd());
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
var CleanPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var strip = require('strip-loader');

var HappyPack = require('happypack');
var CircularDependencyPlugin = require('circular-dependency-plugin');

const nconf = require('nconf');
const filePath = appRoot + '/config/development_server/frontend/service.json';
const configProvider = nconf.argv()
  .env()
  .file(filePath);
const frontendConfig = configProvider.get();

const appConfig = frontendConfig.appConfig;
const WebpackIsomorphicToolsConf = require('@process-engine-js/frontend/dist/helpers/devtools/webpack/webpack-isomorphic-tools');
const isoTools = WebpackIsomorphicToolsConf(appConfig);

exports = module.exports = ((config, webpackIsomorphicTools) => {
  // var host = config.webpackHost;
  // var port = parseInt(config.webpackPort);

  var dllPath = path.resolve(process.cwd(), config.staticDllPath);

  var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(webpackIsomorphicTools);

  var babelLoaderQuery = Object.assign({}, { plugins: [] });
  if (fs.existsSync(path.resolve(config.schemaHelperPath, 'graphql-schema.json'))) {
    babelLoaderQuery.plugins = [
      path.resolve(config.webpackConfigPath, 'babelRelayPlugin.js')
    ];
  }

  babelLoaderQuery.only = [
    "./src/frontend/mainApp.js",
    "./src/frontend/index.js",
    "./src/frontend/components/**/*.js",
    "./src/frontend/containers/**/*.js",
    "./src/frontend/redux/**/*.js",
    "./src/frontend/relay/**/*.js",
    "./src/frontend/theme/**/*.js",
    "./src/frontend/helpers/**/*.js"
  ];

  babelLoaderQuery.presets = ["react", [ "es2015", { modules: false } ], "stage-0"];
  babelLoaderQuery.plugins = babelLoaderQuery.plugins.concat([
    "add-module-exports",
    "transform-decorators-legacy",
    "transform-react-display-name",
    "syntax-async-functions",
    "transform-regenerator",
    "material-ui",
    "lodash",
    [
      "transform-runtime",
      {
        "polyfill": false,
        "regenerator": true
      }
    ]
  ]);

  return {
    devtool: 'source-map',
    cache: true,
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 500,
      poll: 2000,
    },
    context: path.resolve(__dirname, path.normalize(process.cwd())),
    entry: {
      'main': [
        'bootstrap-loader',
        'font-awesome-loader!' + path.resolve(config.appConfig.app.themePath, config.appConfig.app.theme, 'font-awesome.config.js'),
        '' + path.resolve(config.appConfig.app.startScript)
      ]
    },
    output: {
      path: assetsPath,
      filename: '[name]-[chunkhash].js',
      chunkFilename: '[name]-[chunkhash].js',
      publicPath: config.webpackContentBaseProtocol + config.webpackContentBaseHost + ':' + config.webpackContentBasePort + '/dist/'
    },
    target: 'web',
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: [ 'happypack/loader?id=javascript' ]
        },
        {
          test: /\.bpmn$/,
          loaders: [ 'happypack/loader?id=bpmns' ]
        },
        {
          test: /\.json$/,
          loaders: [ 'happypack/loader?id=jsons' ]
        },
        {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]!autoprefixer-loader?browsers=last 2 version!less-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true' })
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer-loader?browsers=last 2 version!sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true' })
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        },
        { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
        { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
        { test: webpackIsomorphicToolsPlugin.regular_expression('images'), loader: 'url-loader?limit=10240' }
      ]
    },
    resolve: {
      unsafeCache: true,
      alias: {
        'react': path.join(path.normalize(process.cwd()), './', 'node_modules', 'react'),
        'react-dom': path.join(path.normalize(process.cwd()), './', 'node_modules', 'react-dom'),
        'react-relay': path.join(path.normalize(process.cwd()), './', 'node_modules', 'react-relay')
      },
      extensions: ['.bpmn','.json', '.js', '.jsx']
    },
    plugins: [
      new HappyPack({
        id: 'javascript',
        loaders: [ 'babel-loader?' + JSON.stringify(babelLoaderQuery) ],
        threads: 4
      }),
      new HappyPack({
        id: 'bpmns',
        loaders: [ 'text-loader' ],
        threads: 4
      }),
      new HappyPack({
        id: 'jsons',
        loaders: [ 'json-loader' ],
        threads: 4
      }),
      new Webpack.DllReferencePlugin({
        context: process.cwd(),
        manifest: require(path.join(dllPath, 'CoreDLL.json'))
      }),
      new Webpack.DllReferencePlugin({
        context: process.cwd(),
        manifest: require(path.join(dllPath, 'ProcessEngineDLL.json'))
      }),
      new CircularDependencyPlugin({
        // exclude detection of files based on a RegExp
        exclude: /node_modules/,
        // add errors to webpack instead of warnings
        failOnError: true
      }),

      new CleanPlugin([assetsPath], { root: appRoot }),
      new ExtractTextPlugin({ filename: '[name]-[chunkhash].css', disable: false, allChunks: true }),
      new Webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        },

        __CLIENT__: true,
        __SERVER__: false,
        __DEVELOPMENT__: false,
        __DEVTOOLS__: false
      }),
      new Webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      }),
      new Webpack.LoaderOptionsPlugin({
        debug: true
      }),
      new Webpack.IgnorePlugin(/\.\/dev/, /\/config$/),
      /*new Webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),*/
      webpackIsomorphicToolsPlugin
    ]
  }
})(frontendConfig, isoTools);
