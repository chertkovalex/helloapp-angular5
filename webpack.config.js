var path = require('path');
var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // plugin for minimization
module.exports = {
  entry: {
    polyfills: './src/polyfills.ts',
    app: './src/main.ts'
  },
  output: {
    path: path.resolve(__dirname, './public'), // path to build export files - folder public
    publicPath: '/public/',
    filename: '[name].js' // name of created file
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      //loader for ts
      {
        test: /\.ts$/, // define filetype
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: path.resolve(__dirname, 'tsconfig.json')
            }
          },
          'angular2-template-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core/,
      path.resolve(__dirname, 'src'), // source filess folder
      {} // routes map
    ),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'polyfills']
    }),
    new UglifyJSPlugin()
  ]
};
