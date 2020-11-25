const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist')
};

module.exports = {
    context: paths.src,  
    entry: {
        app: './index'  
    },

    output: {
        path: paths.dist, 
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',
        publicPath: '/'
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },     
    mode: 'development', 
    devServer: {
      overlay: true,
      open: true,
      hot: true
    },      
    devtool: 'inline-source-map', 
    optimization: {
        splitChunks: {
          chunks: 'all'
        }
      },

    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'src/index.html')
      }) 
    ]
};