const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './web/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.(css|scss)$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './web/index.html',
            inject: 'body'
        })
    ],
    devServer: {
        historyApiFallback: {
            disableDotRule: true
        }
    }
};
