<script setup>
/**
 * @说明: 首页
 * @作者: Aoki
 * @时间: 2023/02/17 17:22:22
 */
import { getCurrentInstance, onMounted, ref } from 'vue'
import GetHeatMap from '@/components/echarts/getHeatMap.vue'

const { proxy } = getCurrentInstance()
let main = ref(null)
onMounted(() => {
  const myChart = proxy.$echarts.init(main.value)
  myChart.setOption({
    title: {
      text: '发布统计图'
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: ['2022-09', '2022-10', '2022-11', '2022-12', '2023-01', '2023-02']
    },
    yAxis: {
      axisLine: {
        show: true
      },
      type: 'value',
      axisLabel: {
        formatter: '{value}'
      }
    },
    series: [
      {
        name: 'Highest',
        type: 'line',
        data: [1, 1, 1, 0, 1, 0],
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
          ]
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }]
        }
      }
    ]

  })
})

</script>

<template>
    <GetHeatMap></GetHeatMap>
</template>


<style lang="less" scoped>
.about {
  height: 400px;
  width: 100%;
}
</style>