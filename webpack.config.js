var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname,'dist/'),
        filename: 'bundle.js'
        },
    devServer: {
        contentBase: path.join(__dirname,'dist/')//,
        //publicPath: '/dist/'
        },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.(png|jpg|gif)$/,
          loader: 'file-loader',
          options: {publicPath: './dist',
                    outputPath:'/'}
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader'
        },
        {
          test: /\.css$/,
          use: [
              { loader: "style-loader" },
              { loader: "css-loader" }
            ]
          },
          {
            test: /\.(html)$/,
            use: {
              loader: 'html-loader',
              options: {
                attrs: [':data-src']
              }
            }
        }          
      ]
    }
  };