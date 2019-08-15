<template>
    <div>
        <li class="mui-table-view-cell mui-media" v-for="(item,index) in news" :key="index">
            <routerLink :to="'/home/newsinfo/' + item.id">
                <img class="mui-media-object mui-pull-left" :src="item.icon">
                <div class="mui-media-body">
                    <span>{{item.title}}</span>
                    <p class="mui-ellipsis">
                        <span>发表:<span>{{item.date}}</span></span>
                        <span>点击:{{item.click}}</span>
                    </p>
                </div>
			</routerLink>
		</li>
    </div>
</template>
<script>
import axios from 'axios'
axios.defaults.baseURL = "http://192.168.1.177:8081"
export default {
    data(){
        return{
            news:[]
        }
    },
    created() {
        this.getNewsList();
    },
    methods: {
        getNewsList(){
            axios.get("news").
            then(response =>{
                if (response.status == 200){
                    var data = response.data
                    if (data.status == 200){
                        this.news = data.data;
                    } else {
                        Toast(data.message);
                    }
                } else {
                    Toast("新闻列表获取失败");
                }
            })
        }
    },
}
</script>
<style lang='scss' scoped>
    .mui-table-view-cell{
        list-style: none;
        a{
            img{
                width: 36px;
                height: 36px;
            }
            span{
                margin-left: 4px;
            }
            .mui-media-body{
                span{
                    font-size: 14px;
                }
            }
            .mui-ellipsis{
                span{
                    font-size: 12px;
                    color: #999;
                    &:nth-child(2){
                        float: right;
                    }
                }
            
            }
        }
    }
</style>