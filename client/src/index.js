import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"

import "./stylesheets/main.scss"

const renderApp = () => {
    ReactDOM.render(<App />, document.getElementById("app"))
}

renderApp()

if (module.hot) {
    console.log("hmr enableddddddd <~~~~~~~~~~~~~")
    module.hot.accept()
}
