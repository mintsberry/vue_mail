<template>
  <div class="app-container" id="app">
    <!-- Header Section -->
    <van-nav-bar title="宫崎骏" left-text="返回" left-arrow @click-left="onClickLeft" />
    <!-- Router Section -->
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
    <!-- Tabbar Section -->
    <nav class="mui-bar mui-bar-tab">
      <routerLink to="/home" class="mui-tab-item" href="#tabbar">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">商城</span>
      </routerLink>
      <routerLink to="/member" class="mui-tab-item" href="#tabbar-with-chat">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </routerLink>
      <routerLink to="/shopcar" class="mui-tab-item" href="#tabbar-with-contact">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge">{{$store.getters.getAllCount}}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </routerLink>
      <routerLink to="/me" class="mui-tab-item" href="#tabbar-with-map">
        <span class="mui-icon mui-icon-navigate"></span>
        <span class="mui-tab-label">我的</span>
      </routerLink>
    </nav>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      transitionName: "right"
    };
  },
  components: {},
  watch: {
    $route(to, from) {
      let arr = ["home", "member", "shopcar", "me"];
      let direct = arr.indexOf(to.name) < arr.indexOf(from.name);
      this.transitionName = direct ? "left" : "right";
    }
  },
  methods: {
    onClickLeft(){
      this.$router.go(-1);
    }
  },
};
</script>

<style scoped>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.app-container {
  padding-bottom: 50px;
  overflow-x: hidden;
}
.right-enter {
  opacity: 0;
  transform: translateX(100%);
}
.right-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.left-enter {
  opacity: 0;
  transform: translateX(-100%);
}
.left-leave-to {
  opacity: 0;
  transform: translateX(100%);
  position: absolute;
}
.left-enter-active,
.left-leave-active,
.right-enter-active,
.right-leave-active {
  transition: all 0.5s ease;
}
</style>
