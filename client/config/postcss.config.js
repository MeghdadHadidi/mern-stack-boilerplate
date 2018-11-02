const globalConfig = require("./global.config")
const rtl = require("postcss-rtl")

module.exports = () => {
    var config = {
        plugins: [require("precss"), require("autoprefixer")]
    }

    if (globalConfig.autoRtlStyle) {
        // config.plugins.
        // Inja boodi
    }

    return config
}
