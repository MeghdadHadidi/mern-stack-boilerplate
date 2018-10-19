/*******************************
 * Environment and Imports
 ******************************/
const environment = process.env.NODE_ENV || "development"

const autoprefixed = require("autoprefixer")
const webpak = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require("path")

/*******************************
 * Entry
 ******************************/
const entry = {
    main: ["./client/src/index.js"]
}

const output = {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js"
}

const module = {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }
    ]
}

module.exports = {
    entry,
    output,
    module
}
