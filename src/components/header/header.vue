<script setup>
import SearchBox from '../searchBox/searchBox.vue'
import GetHeatMap from '@/components/echarts/getHeatMap.vue'
import LineChart from '@/components/echarts/lineChart.vue'</script>

<template>
  <div class="log">
    <img alt="" src="https://www.ihewro.com/logo.svg" type="image/svg+xml">
  </div>
  <div class="box">
    <div class="visualization">
      <svg-icon icon-name="icon-gaishuai"></svg-icon>
    </div>
    <div class="box_echarts">
      <div class="box_getheatmap">
        <GetHeatMap class="getheatmap"></GetHeatMap>
      </div>
      <LineChart class="linechart"></LineChart>
    </div>
    <div class="searchBox">
      <SearchBox></SearchBox>
    </div>
  </div>
</template>

<style lang="less" scoped>
.box_echarts {
  width: 920px;
  height: 515px;
  background-color: #c8d1ec;
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
.box_getheatmap{
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
