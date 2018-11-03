const globalConfig = require("./global.config")
const rtl = require("postcss-rtl")

var postCssConfig = {
    plugins: [require("precss"), require("autoprefixer")]
}

console.log(globalConfig.autoRtlStyle);

if (globalConfig.autoRtlStyle) {
    postCssConfig.plugins.unshift(rtl);
}

module.exports = postCssConfig