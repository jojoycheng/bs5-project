const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.[hash].js',
	},
	// loader 看到什麼檔名時，按照什麼樣的規則運行
	module: {
		rules: [
			{
				test: /\.css$|\.scss$/i,
				use: [
					MiniCssExtractPlugin.loader, 
					{
            loader: 'css-loader',
            options: {
              importLoaders: 1, // 讓 SCSS 讀懂 import 語法
            }
          },
					{
            loader: 'postcss-loader'
          },
					{
						loader: 'sass-loader'
					}
				],
			},
			{
				test: /\.png/,
				type: 'asset/resource'
			}
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'index.[hash].css'
		})
	],
	mode: 'development',
	devtool: 'source-map'
}