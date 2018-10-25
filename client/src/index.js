import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"

import "./stylesheets/main.scss"

ReactDOM.render(<App />, document.getElementById("app"))

if (module.hot) {
    console.log("hot is enabled")
    module.hot.accept()
}
