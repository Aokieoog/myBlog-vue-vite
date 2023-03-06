<script setup>
/**
 * @说明: 首页
 * @作者: Aoki
 * @时间: 2023/02/17 17:22:22
 */
import GetHeatMap from '@/components/echarts/getHeatMap.vue'
import LineChart from '@/components/echarts/lineChart.vue'</script>

<template>
  <LineChart></LineChart>
  <GetHeatMap></GetHeatMap>
</template>


<style lang="less" scoped>
.about {
  height: 400px;
  width: 100%;
}
</style>