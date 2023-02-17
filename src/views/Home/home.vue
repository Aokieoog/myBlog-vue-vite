<script setup>
/**
 * @说明: 首页
 * @作者: Aoki
 * @时间: 2023/02/17 17:22:22 
*/
import { getCurrentInstance, onMounted, ref } from 'vue'

const { proxy } = getCurrentInstance()
let main = ref(null)
onMounted(() => {
  const myChart = proxy.$echarts.init(main.value)
// 绘制图表
//   myChart.setOption({
//     title: {
//       text: 'ECharts 入门示例'
//     },
//     tooltip: {},
//     xAxis: {
//       data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
//     },
//     yAxis: {},
//     series: [
//       {
//         name: '销量',
//         type: 'bar',
//         data: [5, 20, 36, 10, 10, 20]
//       }
//     ]
//   })
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
  <h1>图形</h1>
  <div ref="main" class="about"></div>
</template>


<style lang="less" scoped>
.about {
  height: 400px;
  width: 100%;
}
</style>