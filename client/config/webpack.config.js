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

/*******************************
 * Entry
 ******************************/
const entry = {
    main: ["./src/index.js"]
}

const output = {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js"
}

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

// @TODO:
// - Configure HMR
// - Optimization (Uglify, ...)

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
