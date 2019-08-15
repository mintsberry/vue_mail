<template>
    <div>
        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(swipe,index) in swipes" :key="index">
                <img :src="swipe.image">
            </mt-swipe-item>
        </mt-swipe>
        <!-- Grid -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><routerLink to="/home/newsList">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">Home</div></routerLink></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">Email</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div></a></li>

		</ul>
    </div>
</template>
<script>
import axios from 'axios'
import { Toast } from 'mint-ui' 
axios.defaults.baseURL = "http://192.168.1.177:8081"
export default {    
    data(){
        return {
            swipes: []
        }
    },
    methods: {
        getSwipes(){
            axios.get('swipe')
            .then(response => {
            // handle success
                if (response.status == 200){
                    var data = response.data
                    if (data.status == 200){
                        this.swipes = data.data;
                    } else {
                        Toast(data.message);
                    }
                } else {
                    Toast("图片获取失败");
                }
            })
            .catch(function (error) {
            // handle error
            Toast("图片获取失败");
            })
            .then(function () {
            // always executed
            });
        }
    },
    created() {
        this.getSwipes();
    },
}
</script>
<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
    .mint-swipe-item{
        &:nth-child(1){background: red;}
        &:nth-child(2){background: cadetblue;}
        &:nth-child(3){background: cyan;}
        img{
            width: 100%;
            height: 100%;
        }
    }
}
.mui-table-view.mui-grid-view.mui-grid-9{
    background-color: white;
    border: none;
}
.mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3{
    border: none;
}
</style>