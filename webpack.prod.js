const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
       /* new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        })*/
        
    ],
    optimization: {
        splitChunks: {
            minSize: 0,
            cacheGroups: {
                commons: {
                    name: 'manifest',
                    chunks: 'all',
                    minChunks: 2
                }
            }
        }
    },
});

