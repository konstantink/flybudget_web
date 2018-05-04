const path = require('path');
const bundleTracker = require('webpack-bundle-tracker');

const config = {
  entry: ['babel-polyfill', './app/index.js'],
  output: {
    path: path.resolve(__dirname, './assets/js'),
    filename: 'app.js'
  },
  devServer: {
    inline: true,
    proxy: {
      '/api/*': {
        target: 'http://127.0.0.1:8000/api',
        secure: false
      }
    },
    port: 8080
  },
  plugins: [
    new bundleTracker({
      filename: './webpack-stats.json'
    }),
  ],
  resolve:{
    modules: [
      path.resolve('./node_modules'),
      path.resolve('./app')
    ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
