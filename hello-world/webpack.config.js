const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const url = require('url');

// Make sure any symlinks in the project folder are resolved
const appDirectory = fs.realpathSync(process.cwd());
function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath);
}

module.exports = {
  entry: './src/Hello.js',
  output: {
    path: resolveApp('./build'),
    filename: 'hello.js',
    library: 'Hello'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader'}, 
          { loader: 'css-loader' }, 
          { loader: 'sass-loader' }
        ]
      }      
    ]
  }
};
