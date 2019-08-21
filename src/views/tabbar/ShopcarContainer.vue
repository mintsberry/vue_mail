<template>
  <div class="shop-cart">
    <div class="card-goods">
      <transition-group name="list" tag="p">
        <van-checkbox
          class="card-goods__item"
          v-for="(item,index) in goods"
          :key="item.id"
          :name="item.id"
          v-model="item.selected"
        >
          <van-card :title="item.title" :price="item.price" :num="item.count" :thumb="item.img.url">
            <div slot="footer">
              <van-button size="mini" @click.prevent="remove(index)">删除</van-button>
            </div>
          </van-card>
        </van-checkbox>
      </transition-group>
    </div>
    <van-submit-bar :price="countPrice" button-text="提交订单" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      goods: this.$store.state.cart
    };
  },

  computed: {
    countPrice() {
      let count = this.goods.reduce((total, item) => {
        total =
          total +
          (item.selected ? parseInt(item.price) * parseInt(item.count) : 0);
        return total;
      }, 0);
      count *= 100;
      return count;
    }
  },
  methods: {
    remove(index) {
      this.$store.commit("removeGoods", index);
    }
  }
};
</script>
<style lang="scss" scoped>
.card-goods {
  margin-bottom: 50px;
  .list-leave-to {
    opacity: 0;
  }
  .list-leave-active {
    transition: all 0.5s ;
    position: absolute;
  }
  .list-move{
    transition: all 0.5s ;
  }
  &__item {
    position: relative;
    background-color: #fafafa;
    width: 100%;
    /deep/.van-checkbox__label {
      width: 100%;
      height: auto; // temp
      padding: 0 10px 0 0px;
      box-sizing: border-box;
    }
    /deep/.van-checkbox__icon {
      margin-left: 10px;
    }
  }
}
.shop-cart {
  .van-submit-bar {
    margin-bottom: 50.4px;
  }
}
</style>