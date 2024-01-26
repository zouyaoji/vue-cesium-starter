/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-27 11:13:54
 * @LastEditTime: 2024-01-26 13:54:06
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-cesium-starter\src\main.js
 */
import { createApp } from 'vue'
import VueCesium from 'vue-cesium'
import 'vue-cesium/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'

// createApp(App).use(VueCesium).use(store).use(router).mount('#app')

createApp(App).use(VueCesium, {
  cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js'
}).use(store).use(router).mount('#app')
