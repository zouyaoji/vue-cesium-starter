/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-02-13 00:09:15
 * @LastEditTime: 2022-02-13 00:09:15
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-starter\vue.config.js
 */
// vue.config.js
module.exports = {
  configureWebpack: {
    module: {
      rules: [{
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      }]
    }
  }
}
