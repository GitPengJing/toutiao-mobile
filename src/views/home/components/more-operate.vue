<template>
  <div class="more-operate">
    <!-- 点×后的弹窗 -->
    <van-cell-group v-if="!isReport">
      <van-cell @click="$emit('dislike')">不感兴趣</van-cell>
      <van-cell is-link @click="isReport=true">反馈垃圾内容</van-cell>
      <van-cell>拉黑作者</van-cell>
    </van-cell-group>
    <van-cell-group v-else>
      <van-cell icon="arrow-left" @click="isReport=false">返回</van-cell>
      <van-cell @click="$emit('report',item.value)" v-for="item in reports" :key="item.value">
          {{item.label}}
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { reports } from '@/api/constants'
import eventBus from '@/utils/eventBus'
export default {
  data () {
    return {
      isReport: false, // 控制反馈信息的内容显示
      reports
    }
  },
  created () {
    eventBus.$on('delArticle', () => { this.isReport = false })
  }
}
</script>

<style lang=less scoped>
.more-operate{
    border-radius: 4px;
}
</style>
