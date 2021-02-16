const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode:'production',
  entry:{ 
      index : './source/index.js' ,
      about : './source/about.js'
    } ,
  output : {
    path : path.resolve(__dirname, 'public/js'),
    filename : '[name]_bundle.js'
  },
  module:{
    rules:[
      {
        test : /\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}