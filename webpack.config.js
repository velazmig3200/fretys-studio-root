const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "bundle.js"
	},
	watch: true,
	watchOptions: {
		aggregateTimeout: 600,
		poll: 1700, //check for changes every [n] milliseconds
		ignored: ["/node_modules"]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html"
		})
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"]
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
							modules: true
						}
					}
				]
			}
		]
	}
};
