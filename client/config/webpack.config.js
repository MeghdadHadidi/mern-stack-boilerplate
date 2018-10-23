/*******************************
 * Environment and Imports
 ******************************/
const environment = process.env.NODE_ENV || "development"
const devMode = environment === "development"

const autoprefixer = require("autoprefixer")
const webpack = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

const here = p => path.join(__dirname, p)

/*******************************
 * Entry
 ******************************/
const entry = {
    main: [
        "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
        "./src/index.js"
    ]
}


/*******************************
 * Output
 ******************************/
const output = {
    path: here("../dist"),
    filename: "bundle.js"
}

/*******************************
 * Module
 ******************************/
const modules = {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]
                }
            }
        },
        {
            test: /\.(sa|sc|c)ss$/,
            exclude: [/node_modules/],
            use: [
                devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                "css-loader",
                "postcss-loader",
                "sass-loader"
            ]
        }
    ]
}

/*******************************
 * Plugins
 ******************************/
const plugins = [
    new MiniCssExtractPlugin({
        filename: devMode ? "[name].css" : "[name].[hash].css",
        chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
    }),
    new HtmlWebpackPlugin({
        template: "./src/index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
]

/*******************************
 * Optimization
 ******************************/
// @TODO:
// - Configure HMR
// - Optimization (Uglify, ...)

/*******************************
 * Exporting configuration
 ******************************/
module.exports = {
    entry,
    devServer: {
        hot: true
    },
    devtool: "inline-cheap-module-source-map",
    output,
    module: modules,
    plugins
}
