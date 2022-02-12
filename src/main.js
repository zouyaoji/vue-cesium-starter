/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-27 11:13:54
 * @LastEditTime: 2021-10-12 15:37:45
 * @LastEditors: zouyaoji
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
  cesiumPath: './Cesium/Cesium.js'
}).use(store).use(router).mount('#app')
