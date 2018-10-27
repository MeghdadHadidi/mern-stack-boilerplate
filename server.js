import express from "express"
import keys from "./config/keys"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import { log } from "console"

// Chalk for colorful logs
import chalk from "chalk"

// Routes handler
import routes from "./routes"

const app = express()

// Webpack
// import webpack from "webpack"
// import webpackConfig from "./client/config/webpack.config"
// import WebpackHotMiddleware from "webpack-hot-middleware"
// import WebpackDevMiddleware from "webpack-dev-middleware"

// webpackConfig.entry["server"] = "webpack/hot/dev-server"
// webpackConfig.entry["client"] = "webpack-hot-middleware/client"
// webpackConfig.output["path"] = "/"
// const compiler = webpack(webpackConfig)

// app.use(
//     WebpackDevMiddleware(compiler, {
//         hot: true,
//         publicPath: webpackConfig.output.publicPath,
//         stats: {
//             colors: true
//         },
//         noInfo: true,
//         historyApiFallback: true
//     })
// )

// app.use(
//     WebpackHotMiddleware(compiler, {
//         log: console.log
//     })
// )

app.use(express.static("./client/src"))

// Body Parser
app.use(bodyParser.json())

// DB Config
const db = keys.mongoURI

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => log(chalk.blueBright("MongoDB Connected...")))
    .catch(err => log(chalk.red(err)))

// Use Routes
app.use("/api", routes)

const port = process.env.PORT || 5000

app.listen(port, () =>
    log(chalk.greenBright(`Server started on port: ${port}`))
)
