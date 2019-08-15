import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import 'mint-ui/lib/style.css'
import { Header,Swipe, SwipeItem } from 'mint-ui';
import './assets/mui/css/mui.min.css'
import './assets/mui/css/icons-extra.css'
import router from './router'
import 'animate.css'
import axios from 'axios'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.use(VueRouter)
Vue.prototype.$axios = axios;
Vue.prototype.$axios.defaults.baseURL = "http://192.168.1.177:8081"
Vue.config.productionTip = false
var vm = new Vue({
  router,
  render: h => h(App),
  router
}).$mount('#app')