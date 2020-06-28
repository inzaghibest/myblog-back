import Vue from 'vue'
import App from './App.vue'
import router from './router'
import httpRequest from './network/httRequest'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(ElementUI) // 引入ElementUI
Vue.use(mavonEditor) // 引入ElementUI
Vue.config.productionTip = false
Vue.prototype.HOST='/'
// 挂载全局
Vue.prototype.$http = httpRequest // Ajax 请求方法

console.log(process.env.NODE_ENV)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
