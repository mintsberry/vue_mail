<template>
  <div>
  <!--
   注意指定的“round”和
   自闭合标签（因为我们不需要指定任何
   按钮的内容 - 反正图标填充所有可用内容空间）。 
   该标签被丢弃。
-->
<q-btn round color="secondary" icon="card_giftcard" />

<!--
  接下来是完全相同的，但任何时候都可以使用“icon”属性。
-->
<q-btn round color="secondary">
  <q-icon name="card_giftcard" />
</q-btn>
  </div>
</template>

<script>
import { QTabs, QTab, QBtn } from 'quasar'

export default {
  components: {
    QTabs,
    QTab,
    QBtn
  },
  data () {
    return {
      // 初始化为默认选择第二个选项卡
      selectedTab: 'tab-2'
    }
  },
  methods: {
    selectThirdTab () {
      // 我们选择'name'设置为'tab-3'的第三个标签
      this.selectedTab = 'tab-3'
    }
  }
}
</script>
