<script setup>
/**
 * @说明: 发布统计图
 * @作者: Aoki
 * @时间: 2023/02/17 17:22:22
 */
import { getCurrentInstance, nextTick, onMounted, ref } from 'vue'

const { proxy } = getCurrentInstance()
let main = ref(null)
onMounted(() => {
  nextTick(() => {
    const myChart = proxy.$echarts.init(main.value)
    myChart.setOption({
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
})
</script>

<template>
  <div ref="main" class="about"></div>
</template>


<style lang="less" scoped>
.about {
  width: 275px;
  height: 240px;
}
</style>