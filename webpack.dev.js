const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const path = require('path');
console.log(__dirname);
module.exports = merge(common,{
    mode:'development',
    devtool: 'inline-source-map',
    devServer:{
        contentBase: path.join(__dirname, './'),
        compress: true,
        port: 9000
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
      ]
})
