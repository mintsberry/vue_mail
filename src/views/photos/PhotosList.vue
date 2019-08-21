<template>
    <div>
      <van-tabs v-model="active">
          <van-tab v-for="index in 8" :title="'标签 ' + index" :key="index">
            内容 {{ index }}
        </van-tab>
      </van-tabs>
        
    </div>
</template>
<script>
export default {
  data() {
    return {
      active: 1
    };
  }
}
</script>
<style lang="scss" scoped>

</style>