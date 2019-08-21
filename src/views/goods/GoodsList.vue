<template>
    <div>
        <div class="goodsList">
            <div class="goodsItem" v-for="item in goodsList" :key="item.id" @click="toDetail(item.id)">
                <img :src="item.img_url">
                <h1 class="title">{{item.title}}</h1>
                <div class="info">
                    <p class="price">
                        <span class="now">${{item.sell_price}}</span>
                        <span class="old">${{item.marker_price}}</span>
                    </p>
                    <p class="sell">
                        <span>热卖</span>
                        <span>剩{{item.quantity}}件</span>
                    </p>
                </div>
            </div>
        </div>
        <div  class="moreInfo">
            <van-button  :loading="buttonLoad" :disabled="buttonFlag" type="info" @click="getMore" plain hairline >{{buttonInfo}}</van-button>
        </div>
    </div>
</template>
<script>
import { Toast } from 'mint-ui' 
export default {
    data() {
        return {
            goodsList:[],
            pageIndex: 1,
            buttonInfo: "加载更多",
            buttonFlag: false,
            buttonLoad: false
        }
    },  
    created() {
        this.getGoodsList();
    },
    methods: {
        getGoodsList(){
            this.buttonLoad = true;
            this.$axios.get("/goods",{
                params:{
                    pageIndex: this.pageIndex
                }
            })
            .then(response => {
                if (response.status == 200){
                    let result = response.data;
                    if (result.status == 200){
                        let data = result.data;
                        this.goodsList = this.goodsList.concat(data);
                        if (data.length < 6){
                            this.buttonFlag = true;
                            this.buttonInfo = "已经到底了";
                        }
                    } else if (result.status == 402) {
                        this.buttonFlag = true;
                        this.buttonInfo = "已经到底了";
                    }

                }
            }).catch((e)=>{
                Toast('商品加载失败');
            }).finally(()=>{
                this.buttonLoad=false;
            })
        },
        getMore(){
            this.pageIndex++;
            this.getGoodsList();
        },
        toDetail(id){
            this.$router.push({ name: 'goodsInfo', params: { id: id }})
        }
    },
}
</script>
<style lang="scss" scoped>
    .goodsList{
        display: flex;
        flex-wrap: wrap;
        padding: 6px;
        justify-content: space-between;
        .goodsItem{
            width: 49%;
            border: 1px solid #ccc;
            margin-bottom: 2px;
            padding: 0px 2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            img{
                width: 164px;
                height: 164px;
            }
            .title{
                font-size: 14px;
            }
            .info{
                background-color: #ccc4;
                p{
                    margin: 0px;
                    padding: 4px;
                }
                .price{
                    .now{
                        color: red;
                        font-weight: bold;
                        font-size: 16px
                    }
                    .old{
                        text-decoration: line-through;
                        font-size: 12px;
                        margin-left: 10px;
                    }
                }
                .sell{
                    display: flex;
                    justify-content: space-between;
                    font-size: 12px
                }
            }
        }
    }
    .moreInfo{
        margin: 4px 4px;
        button{
            width: 100%;
        }
    }
</style>