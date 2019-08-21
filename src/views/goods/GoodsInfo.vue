<template>
    <div class="goods" v-if="detail">
        <transition
        @before-enter="beforeEnter"
        @enter = "enter"
        @after-enter="afterEnter">
            <div v-show="ballFlag" class="ball" :style="{top:ballTop + 'px', left:ballLeft + 'px'}"></div>

        </transition>
        <Swipe :swipes="swipes"></Swipe>
        <van-cell-group>
            <van-cell>
                <div class="goods-title">{{detail.title}}</div>
                <span class="goods-now-price">${{detail.sell_price}}</span>
                <span class="goods-market-price">${{detail.marker_price}}</span>
            </van-cell>
            <van-cell class="goods-button-group">
                <span class="express">
                    <van-col span="7">运费：免运费</van-col>
                    <van-col span="6">剩余：{{detail.quantity}}</van-col>
                </span>
                <van-col span="6"><van-button type="warning" size="small" @click="addCart">加入购物车</van-button></van-col>
                <van-col span="4"><van-button type="danger" size="small">立即购买</van-button></van-col>
            </van-cell>
        </van-cell-group>
        <van-cell-group class="goods-detail">
            <van-cell title="查看商品详情"/>
            <van-cell>
                <p>商品货号：{{detail.id}}</p>
                <p>上架时间：{{detail.add_time}}</p>
                <p>商品介绍：{{detail.introduction}}</p>
            </van-cell>
            <van-cell class="more-detail-button">
                <van-button plain hairline type="primary" size="large">图文介绍</van-button>
                <van-button plain hairline type="danger" size="large">商品评论</van-button>    
            </van-cell>
        </van-cell-group>
    </div>
</template>
<script>
import Swipe from '../../components/Swipe'
export default {
    components:{
        Swipe
    },
    data() {
        return {
            id: this.$route.params.id,
            detail: null,
            swipes:[],
            ballTop:200,
            ballLeft:0,
            ballFlag: false,
            balloffsetX: 0,
            balloffsetY: 0
        }
    },
    created() {
        this.getSwipes();
        this.getDetail();
    },
    mounted() {
        
    },
    methods: {
        getSwipes(){
            this.$axios.get("/goodsImages/" + this.id)
            .then(response=>{
                if(response.status==200){
                    let result = response.data;
                    let data = result.data;
                    this.swipes = data;
                }
            })
        },
        getDetail(){
            this.$axios.get("/goods/" + this.id)
            .then(response=>{
                if (response.status==200){
                    let result = response.data;
                    if (result.status == 200){
                        let data = result.data;
                        this.detail = data;
                    }
                }
            })
        },
        addCart(event){
            this.ballFlag = !this.ballFlag;
            this.ballTop = window.pageYOffset + event.clientY-7.5;
            this.ballLeft = event.clientX-7.5;
            let badgePos = document.getElementById("badge").getBoundingClientRect();
            this.balloffsetY = badgePos.top - this.ballTop +  window.pageYOffset;
            this.balloffsetX = badgePos.left - this.ballLeft
            setTimeout(() => {
                let goodsInfo = {
                    id: this.id,
                    count : 1,
                    price: this.detail.sell_price,
                    img: this.swipes[0],
                    title: this.detail.title,
                    selected: true
                }
                this.$store.commit('addToCar',goodsInfo);
            }, 800);
        },
        beforeEnter(el){
            el.style.transform = "translate(0,0)";
            //     top: 592.5px;
            // left: 228px;
        },
        enter(el,done){
            el.offsetWidth;
            el.style.transition = "all 0.8s cubic-bezier(.4,-0.3,1,.68)";
            el.style.transform = "translate(" + this.balloffsetX + "px," + this.balloffsetY + "px)"
            done();
        },
        afterEnter(el){
            this.ballFlag = !this.ballFlag;
           
        }
    },
}
</script>
<style lang="scss" scoped>
.goods{
    background-color: #ccc2;
    .mint-swipe{
    height: 350px;
    }
    .goods-title{
        font-size: 16px;
    }
    .goods-now-price{
        color: #f44;
    }
    .goods-market-price{
        color: #ccc;
        font-size: 12px;
        text-decoration: line-through;
        margin-left: 8px;
    }
    .express {
        color: #999;
        font-size: 12px;
    }
    .goods-detail{
        margin-top: 8px;
        .more-detail-button{
            button{
                margin-top: 4px;
            }
        } 
    }
    .ball{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #f44;
        position: absolute;
        z-index: 99;
    }
}

</style>