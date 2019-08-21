<template>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(swipe,index) in swipes" :key="index">
            <img :src="swipe.url">
        </mt-swipe-item>
    </mt-swipe>
</template>
<script>
export default {
    props:["swipes"]  
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
</style>