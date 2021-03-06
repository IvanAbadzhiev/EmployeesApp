const path = require("path");
const HtmlWebpackPlugin =  require("html-webpack-plugin");

module.exports = {
    entry : "./app/App.js",
    output : {
        path : path.resolve(__dirname , "dist"),
		filename: "index_bundle.js",
		publicPath: "/"
    },
    module : {
        rules : [
            {test : /\.(js)$/, use:"babel-loader"},
            {test : /\.css$/, use:["style-loader", "css-loader"]}
        ]
    },
	mode:"development",
	devServer: {
		historyApiFallback: true,
	},
    plugins : [
        new HtmlWebpackPlugin ({
            template : "app/index.html"
        })
    ]

}