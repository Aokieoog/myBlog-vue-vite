<template>
  <div>
    <h1>感谢使用剑侠3记账本</h1>
    <h2>公告</h2>
    <el-card style="width: 40rem" @click="gobook">
      <p>“剑侠3记账本”是为剑网三做的一个交易行记账功能</p>
      <p>在某一天，逛交易行的时候发现忘记远古时期购买的材料单价，因此有感而发开发了此网站。</p>
      <p>此网站完全使用静态部署，所有的数据信息全部储存在本地浏览器，<span style="color: red;">不会窃取信息</span>。</p>
      <p>同样有弊端，不可以跨设备使用,浏览器缓存清除数据消失（<span style="color: red;">不手动清除不会消失</span>）。</p>
      <span>使用方法:</span><el-link class="url" href="http://qs.ieoog.com/index.php/archives/28/"
        target="_blank">点我</el-link>
    </el-card>
  </div>
</template>

<script setup>
import router from '@/router';
import { ref, reactive } from 'vue';

const data = reactive({})

const gobook = () => {
  router.push({ path: '/js3book' })
}


</script>

<style scoped lang='less'>
.url {
  color: #409EFF;
  font-size: 18px;
}
</style>