const webpack = require("webpack");

module.exports = {
    entry: "./main",
    output:{
        filename: "bundle.js"
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query:{
                    presets:['es2015']
                }
            }
        ]
    },
    watch: true
};