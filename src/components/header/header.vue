<script setup>
import SearchBox from '../searchBox/searchBox.vue'
import GetHeatMap from '@/components/echarts/getHeatMap.vue'
import LineChart from '@/components/echarts/lineChart.vue'
import PieLike from '@/components/echarts/pieLike.vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'

let show = ref(false)

function showeach() {
  show.value = !show.value
}
onMounted(()=>{
  document.addEventListener('click', (e) => {
    if (e.target.className !== 'visualization') {
      show.value = false
    }
  })
})
onBeforeUnmount(()=>{
  window.removeEventListener('click', () => {}, true)
})
</script>

<template>
  <div class="log">
    <img alt="" src="https://www.ihewro.com/logo.svg" type="image/svg+xml">
  </div>
  <div class="box">
    <div class="visualization" @click.stop="showeach">
      <svg-icon icon-name="icon-gaishuai"></svg-icon>
    </div>
    <div class="box_echarts" v-show="show">
      <div class="box_getheatmap">
        <p style="margin: 5px 0 0 5px;text-align: left;font-size: 14px;font-weight: 700">动态日历</p>
        <p style="margin: 0 0 0 5px;font-size: 12px;text-align: left">统计近10个月提交信息</p>
        <GetHeatMap class="getheatmap"></GetHeatMap>
      </div>
      <div style="display:flex;">
        <div style="width:317px;height:290px;padding: 0 15px;">
          <p style="margin: 5px 0 10px 5px;text-align: left">发布统计图</p>
          <LineChart class="linechart"></LineChart>
        </div>
        <div style="width: 317px;height: 290px;padding: 0 15px">
          <p style="margin: 5px 0 10px 5px;text-align: left">分类统计图</p>
          <PieLike></PieLike>
        </div>
      </div>
    </div>
    <div class="searchBox">
      <SearchBox></SearchBox>
    </div>
  </div>
</template>

<style lang="less" scoped>
.box_echarts {
  width: 694px;
  height: 515px;
  background-color: #f9f9f9;
  position: absolute;
  top: 50px;
  left: 220px;
  padding: 15px 15px;
}
.visualization {
  position: relative;
  float: left;
  padding: 0.625rem 0.875rem;
  margin: 0.3125rem;
  height: 1.3125rem;
  color: #777777;
  border-radius: 0.3125rem;
  &:active {
    background: #ececec;
  }
}
.log {
  float: left;
  width: 13.75rem;
  height: 3.125rem;
  img {
    width: 8.125rem;
    height: 2.5rem;
  }
}
.searchBox {
  float: left;
  margin: 0.625rem 0;
  padding: 0 0.9375rem;
}
.box {
  width: 57.5rem;
  height: 3.125rem;
  //margin: 0 0 0 13.75rem;
  //padding: 0 0.9375rem;
}
.box_getheatmap {
  width: 634px;
  height: 228px;
}
.linechart {
  float: left;
}
.getheatmap {
  //width: 39.625rem;
  //height: 14.25rem;
}
</style>
