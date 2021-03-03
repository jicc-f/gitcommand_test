import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.prototype.$bus = new Vue();
Vue.config.productionTip = false;
import Toast from '../src/components/common/toast/toast'
Vue.use(Toast);
import './plugins/element.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);






new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
