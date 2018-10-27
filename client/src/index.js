import React from "react"
import ReactDOM from "react-dom"
import { hot } from "react-hot-loader"
import App from "./components/App"

import "./stylesheets/main.scss"

const renderApp = () => {
    ReactDOM.render(<App />, document.getElementById("app"))
}

renderApp()

if (module.hot && process.env.NODE_ENV === "development") {
    console.log("hmr enableddddddd <~~~~~~~~~~~~~")
    module.hot.accept()
}
