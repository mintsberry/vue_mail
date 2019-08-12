import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import 'mint-ui/lib/style.css'
import { Header } from 'mint-ui';
import './assets/mui/css/mui.min.css'
import './assets/mui/css/icons-extra.css'
import router from './router'
Vue.component(Header.name, Header);
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  router
}).$mount('#app')
