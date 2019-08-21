import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import 'mint-ui/lib/style.css'
import { Header,Swipe, SwipeItem,Button } from 'mint-ui';
import './assets/mui/css/mui.min.css'
import './assets/mui/css/icons-extra.css'
import router from './router'
import 'animate.css'
import axios from 'axios'
import { Tab, Tabs, Icon, } from 'vant'
import { RadioGroup, Radio,Toast } from 'vant'
import './plugins/vant.js'
import { } from 'vant';
import Vuex from 'vuex';
import { SubmitBar } from 'vant';
import { Card } from 'vant';

Vue.use(Card);
Vue.use(SubmitBar);
Vue.use(Vuex);
Vue.use(Icon)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Tab).use(Tabs);
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.use(VueRouter)
Vue.prototype.$axios = axios;
Vue.prototype.$axios.defaults.baseURL = "http://localhost:8081"
Vue.config.productionTip = false

var cart = JSON.parse(localStorage.getItem('cart')|| '[]')


const store = new Vuex.Store({
  state:{
    cart: cart
  },
  mutations:{
    addToCar(state, goodsInfo){
        let flag = false
        state.cart.some(item=>{
          if(item.id==goodsInfo.id){
            item.count += parseInt(goodsInfo.count);
            flag = true;
            return flag ;
          }
        })
        if (!flag){
          state.cart.push(goodsInfo);
        }
        localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removeGoods(state,index){
      state.cart.splice(index,1)
      localStorage.setItem('cart', JSON.stringify(state.cart));
    }
  },
  getters:{
    getAllCount(state){
      let count = 0;
      state.cart.forEach(item=>{
        if(item.selected){
          count += item.count;
        }
      })
      return count;
    }
  }
})
const vm = new Vue({
  router,
  render: h => h(App),
  router,
  store
}).$mount('#app')