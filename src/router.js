import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/tabbar/HomeContainer.vue'
import Search from './views/tabbar/SearchContainer.vue'
import Member from './views/tabbar/MemberContainer.vue'
import Shopcar from './views/tabbar/ShopcarContainer.vue'
import NewsList from './views/news/NewsList.vue'
import NewsInfo from './views/news/NewsInfo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/home",
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
    {
      path: '/home/newsList',
      name: 'newsList',
      component: NewsList
    },
    {
      path: '/home/newsinfo/:id',
      name: "newsInfo",
      component: NewsInfo
    }
  ],
  linkActiveClass: ' mui-active'
})
