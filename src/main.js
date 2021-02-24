import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.prototype.$bus = new Vue();
Vue.config.productionTip = false;
import Toast from '../src/components/common/toast/toast'
Vue.use(Toast)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
