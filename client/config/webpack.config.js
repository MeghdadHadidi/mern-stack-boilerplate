/*******************************
 * Environment and Imports
 ******************************/
var env = JSON.stringify(process.env.NODE_ENV.trim())
var environment = env || "development"
const devMode = environment !== "production"

const webpack = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const StyleLintPlugin = require("stylelint-webpack-plugin")
const path = require("path")

const here = p => path.join(__dirname, p)

/*******************************
 * Entry
 ******************************/
const entry = {
    main: [here("../src/index.js")]
}


/*******************************
 * Output
 ******************************/
const output = {
    path: here("../dist"),
    filename: "[name].bundle.js"
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
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            }
        },
        {
            test: /\.(sa|sc|c)ss$/,
            exclude: [/node_modules/],
            use: [
                devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                "css-loader",
                {
                    loader: "postcss-loader",
                    options: {
                        config: {
                            path: here("./")
                        }
                    }
                },
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
        template: here("../src/index.html")
    }),
    new StyleLintPlugin({
        configFile: here("./stylelint.config.js")
    })
]

// Enabling HMR only if dev mode is enabled
if (devMode) {
    plugins.push(new webpack.HotModuleReplacementPlugin())
}

/*******************************
 * Optimization
 ******************************/
// @TODO:
// - Post Css ~~> RTL Css
const optimization = {
    minimizer: [
        new UglifyJsPlugin({
            sourceMap: true,
            parallel: 4,
            cache: true,
            extractComments: true,
            uglifyOptions: {
                comments: /@preserve/i
            }
        })
    ]
}


/*******************************
 * Exporting configuration
 ******************************/
var configObject = {
    mode: devMode ? "development" : "production",
    entry,
    devServer: {
        port: 3000,
        hot: true,
        proxy: {
            "/api": "http://localhost:5000"
        }
    },
    optimization,
    devtool: "inline-cheap-module-source-map",
    output,
    resolveLoader: {
        // Configure how Webpack finds `loader` modules.
        modules: [here("../node_modules")]
    },
    module: modules,
    plugins
}

module.exports = configObject