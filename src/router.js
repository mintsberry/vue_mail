import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/tabbar/HomeContainer.vue'
import Search from './views/tabbar/SearchContainer.vue'
import Member from './views/tabbar/MemberContainer.vue'
import Shopcar from './views/tabbar/ShopcarContainer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/home"
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/me',
      name: 'me',
      component: Search
    },
    {
      path: '/member',
      name: 'member',
      component: Member
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: Shopcar
    },
  ],
  linkActiveClass: ' mui-active'
})
