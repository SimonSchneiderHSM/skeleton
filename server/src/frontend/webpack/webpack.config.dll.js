var path = require('path');
var Webpack = require('webpack');
var CircularDependencyPlugin = require('circular-dependency-plugin');

var outputPath = path.resolve(process.cwd(), 'dist/frontend/static/bundle');

module.exports = {
  devtool: 'source-map',
  entry: {
    CoreDLL: [
      //'react',
      //'react-dom',
      'classnames',
      'babel-polyfill',
      'addict-ioc',
      'material-ui',
      'es6-promise',
      'redux',
      'react-router-redux',
      'redux-async-connect',
      'isomorphic-fetch',
      'redux-api',
      'react-tap-event-plugin',
      //'react-relay',
      'react-redux',
      'react-router',
      'react-router-bootstrap',
      'react-bootstrap',
      'react-helmet',
      'react-grid-layout',
      'jquery'
    ],
    ProcessEngineDLL: [
      '@process-engine-js/bootstrapper',
      '@process-engine-js/core',
      '@process-engine-js/core_contracts',
      '@process-engine-js/data_model',
      '@process-engine-js/data_model_contracts',
      '@process-engine-js/datasource_adapter_base',
      '@process-engine-js/datasource_adapter_localstorage',
      '@process-engine-js/datasource_adapter_proxy',
      '@process-engine-js/datastore',
      '@process-engine-js/datastore_messagebus',
      '@process-engine-js/event_aggregator',
      '@process-engine-js/feature',
      //'@process-engine-js/frontend_mui',
      '@process-engine-js/http',
      '@process-engine-js/iam_browser',
      '@process-engine-js/invocation',
      '@process-engine-js/invocation_contracts',
      '@process-engine-js/messagebus',
      '@process-engine-js/messagebus_adapter_local',
      '@process-engine-js/messagebus_adapter_faye_browser',
      '@process-engine-js/metadata',
      '@process-engine-js/process_engine',
      '@process-engine-js/process_engine_client_api',
      //'@process-engine-js/process_engine_client_processable_react',
      '@process-engine-js/process_repository_browser',
      '@process-engine-js/routing',
      '@process-engine-js/security_service',
      '@process-engine-js/timing'
    ]
  },
  resolve: {
    unsafeCache: true,
    alias: {      
      'react': path.join(path.normalize(process.cwd()), './', 'node_modules', 'react'),
      'react-dom': path.join(path.normalize(process.cwd()), './', 'node_modules', 'react-dom'),
      'react-relay': path.join(path.normalize(process.cwd()), './', 'node_modules', 'react-relay')
    }
  },
  output: {
    filename: '[name].dll.js',
    path: outputPath,
    library: '[name]'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  plugins: [
    new Webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new Webpack.DllPlugin({
      name: '[name]',
      path: path.join(outputPath, '[name].json')
    }),
    new CircularDependencyPlugin({
      // exclude detection of files based on a RegExp
      exclude: /node_modules/,
      // add errors to webpack instead of warnings
      failOnError: true
    })
  ]
};