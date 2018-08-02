const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/example/index.html',
    filename: 'index.html',
    inject: 'body'
})
module.exports = {
    mode: 'development',
    entry: {app:'./example/app.tsx'},
    output: {path: __dirname, filename: 'bundle.js'},
    devServer: {
        contentBase: path.join(__dirname, './example/'), // boolean | string | array, static file location
        // compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        // hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        // noInfo: true, // only errors & warns on hot reload

    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [

            {
                test: /\.pcss$/,
                loader: ExtractTextPlugin.extract( [

                    {loader: 'css-loader', options: {importLoaders: 1}},
                    'postcss-loader',


                ])
            },
            {test: /\.tsx?$/, loader: "awesome-typescript-loader"},


        ]
    },
    plugins: [
        HTMLWebpackPluginConfig,
        new ExtractTextPlugin('[name].bundle.css')]
}