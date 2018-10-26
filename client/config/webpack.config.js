/*******************************
 * Environment and Imports
 ******************************/
const environment = process.env.NODE_ENV || "development"
const devMode = environment === "development"

const autoprefixer = require("autoprefixer")
const webpack = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const StyleLintPlugin = require("stylelint-webpack-plugin")
const path = require("path")

const here = p => path.join(__dirname, p)

/*******************************
 * Entry
 ******************************/
const entry = {
    main: [here("../src/index.js")]
}

// Adding HMR entry only if devmode is enabled
// if (devMode) {
//     Object.keys(entry).forEach(x => {
//         if (typeof entry[x] === "string") {
//             entry[x] = [entry[x]]
//         }

//         entry[x].push("webpack-hot-middleware/client")
//     })
// }

/*******************************
 * Output
 ******************************/
const output = {
    path: here("../src"),
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
                        importLoaders: 1,
                        config: {
                            path: "./config/"
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
// - Optimization (Uglify, ...)

/*******************************
 * Exporting configuration
 ******************************/
module.exports = {
    mode: environment,
    entry,
    devServer: {
        port: 3000,
        hot: true,
        proxy: {
            "/api": "http://localhost:5000"
        }
    },
    devtool: "inline-cheap-module-source-map",
    output,
    resolveLoader: {
        // Configure how Webpack finds `loader` modules.
        modules: [here("../node_modules")]
    },
    module: modules,
    plugins
}
