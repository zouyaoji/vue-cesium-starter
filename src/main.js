import { createApp } from 'vue'
import VueCesium from 'vue-cesium'
import 'vue-cesium/lib/theme-default/index.css'
import App from './App.vue'
import router from './router'
import store from './store'

// createApp(App).use(VueCesium).use(store).use(router).mount('#app')

createApp(App).use(VueCesium, {
  cesiumPath: './Cesium/Cesium.js'
}).use(store).use(router).mount('#app')
