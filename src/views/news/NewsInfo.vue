<template>
    <div class="newsinfo-container" v-if="newsinfo">
        <h3 class="title">{{newsinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间:{{newsinfo.date}}</span>
            <span>点击:{{newsinfo.click}}</span>
        </p>
        <hr>
        <div class="content">
            {{newsinfo.content}}
        </div>
        <comment-box></comment-box>
    </div>
</template>
<script >
import { Toast } from 'mint-ui' 
import Comment from '../../components/Comment'
export default {
    data() {
        return {
            id: this.$route.params.id,
            newsinfo: null
        }
    },
    methods: {
        getNewsInfo(){
            this.$axios.get("news/" + this.id)
            .then(response => {
                if (response.status == 200){
                    var data = response.data
                    console.log(data);
                    if (data.status == 200){
                        this.newsinfo = data.data;
                        console.log(this.newsinfo)
                    } else {
                        Toast(data.message);
                    }
                } else {
                    Toast("获取新闻详情失败");
                }
            })
            .catch(function (error) {
                Toast("获取新闻详情失败");
            })
        }
    },
    created() {
        this.getNewsInfo();
    },
    components:{
        'comment-box': Comment
    }
}
</script>
<style lang="scss" scoped>
    .newsinfo-container{
        padding: 0 4px;
        .title{
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
            color: red;
        }
        .subtitle{
            font-size: 13px;
            color: #225aff;
            display: flex;
            justify-content: space-between;
        }
        .content{}
    }
</style>