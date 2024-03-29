<script setup>
/**
 * @说明: 热力图
 * @作者: Aoki
 * @时间: 2023/02/17 17:22:22
 */
import { getCurrentInstance, onMounted, ref } from 'vue'

const { proxy } = getCurrentInstance()
let heatMap = ref(null)

function getVirtualData(year) {
  const date = +proxy.$echarts.time.parse(year + '-01-01')
  const end = +proxy.$echarts.time.parse(year + '-12-31')
  const dayTime = 3600 * 24 * 1000
  const data = []
  for (let time = date; time <= end; time += dayTime) {
    data.push([
      proxy.$echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
      Math.floor(Math.random() * 10000)
    ])
  }
  return data
}

onMounted(() => {
    getVirtualData(2021)
    const myChart = proxy.$echarts.init(heatMap.value)
    myChart.setOption({
      tooltip: {
        formatter: function (params) {
          return params.value[0] + ' : ' + params.value[1]
        }
      },
      visualMap: {
        show: false,
        min: 0,
        max: 5,
        inRange: {
          color: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127', '#196127']
        }
      },
      calendar: {
        left: 40,
        right: 45,
        itemStyle: {
          color: '#ccc',
          borderWidth: 3,
          borderColor: '#fff'
        },
        cellSize: ['auto', 13],
        range: ['2022-5-17', '2023-2-17'],
        splitLine: true,
        dayLabel: {
          firstDay: 7,
          nameMap: 'ZH'
        },
        monthLabel: {
          nameMap: [
            '一月',
            '二月',
            '三月',
            '四月',
            '五月',
            '六月',
            '七月',
            '八月',
            '九月',
            '十月',
            '十一月',
            '十二月'
          ]
        },
        yearLabel: {
          show: false
        },
        silent: {
          show: false
        }
      },
      series: {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: [
          ['2022-05-17', 0], ['2022-05-18', 0], ['2022-05-19', 0], ['2022-05-20', 4], ['2022-05-21', 0], ['2022-05-22', 0], ['2022-05-23', 0], ['2022-05-24', 0], ['2022-05-25', 0], ['2022-05-26', 1], ['2022-05-27', 1], ['2022-05-28', 0], ['2022-05-29', 0], ['2022-05-30', 0], ['2022-05-31', 0], ['2022-06-01', 0], ['2022-06-02', 1], ['2022-06-03', 1], ['2022-06-04', 0], ['2022-06-05', 2], ['2022-06-06', 0], ['2022-06-07', 0], ['2022-06-08', 1], ['2022-06-09', 0], ['2022-06-10', 0], ['2022-06-11', 0], ['2022-06-12', 0], ['2022-06-13', 0], ['2022-06-14', 0], ['2022-06-15', 0], ['2022-06-16', 1], ['2022-06-17', 0], ['2022-06-18', 0], ['2022-06-19', 0], ['2022-06-20', 0], ['2022-06-21', 0], ['2022-06-22', 0], ['2022-06-23', 0], ['2022-06-24', 3], ['2022-06-25', 0], ['2022-06-26', 3], ['2022-06-27', 0], ['2022-06-28', 0], ['2022-06-29', 0], ['2022-06-30', 0], ['2022-07-01', 0], ['2022-07-02', 0], ['2022-07-03', 0], ['2022-07-04', 0], ['2022-07-05', 0], ['2022-07-06', 0], ['2022-07-07', 0], ['2022-07-08', 2], ['2022-07-09', 4], ['2022-07-10', 0], ['2022-07-11', 0], ['2022-07-12', 0], ['2022-07-13', 0], ['2022-07-14', 0], ['2022-07-15', 0], ['2022-07-16', 1], ['2022-07-17', 1], ['2022-07-18', 0], ['2022-07-19', 0], ['2022-07-20', 2], ['2022-07-21', 2], ['2022-07-22', 0], ['2022-07-23', 1], ['2022-07-24', 0], ['2022-07-25', 0], ['2022-07-26', 0], ['2022-07-27', 1], ['2022-07-28', 0], ['2022-07-29', 0], ['2022-07-30', 0], ['2022-07-31', 0], ['2022-08-01', 0], ['2022-08-02', 1], ['2022-08-03', 0], ['2022-08-04', 0], ['2022-08-05', 0], ['2022-08-06', 1], ['2022-08-07', 2], ['2022-08-08', 1], ['2022-08-09', 1], ['2022-08-10', 0], ['2022-08-11', 1], ['2022-08-12', 0], ['2022-08-13', 0], ['2022-08-14', 0], ['2022-08-15', 1], ['2022-08-16', 1], ['2022-08-17', 1], ['2022-08-18', 0], ['2022-08-19', 0], ['2022-08-20', 1], ['2022-08-21', 0], ['2022-08-22', 1], ['2022-08-23', 4], ['2022-08-24', 2], ['2022-08-25', 2], ['2022-08-26', 2], ['2022-08-27', 5], ['2022-08-28', 5], ['2022-08-29', 3], ['2022-08-30', 2], ['2022-08-31', 3], ['2022-09-01', 3], ['2022-09-02', 2], ['2022-09-03', 4], ['2022-09-04', 4], ['2022-09-05', 1], ['2022-09-06', 0], ['2022-09-07', 1], ['2022-09-08', 1], ['2022-09-09', 0], ['2022-09-10', 1], ['2022-09-11', 0], ['2022-09-12', 0], ['2022-09-13', 1], ['2022-09-14', 1], ['2022-09-15', 3], ['2022-09-16', 1], ['2022-09-17', 1], ['2022-09-18', 3], ['2022-09-19', 2], ['2022-09-20', 0], ['2022-09-21', 2], ['2022-09-22', 1], ['2022-09-23', 1], ['2022-09-24', 0], ['2022-09-25', 9], ['2022-09-26', 1], ['2022-09-27', 1], ['2022-09-28', 0], ['2022-09-29', 1], ['2022-09-30', 1], ['2022-10-01', 1], ['2022-10-02', 1], ['2022-10-03', 0], ['2022-10-04', 0], ['2022-10-05', 1], ['2022-10-06', 0], ['2022-10-07', 3], ['2022-10-08', 0], ['2022-10-09', 1], ['2022-10-10', 0], ['2022-10-11', 2], ['2022-10-12', 1], ['2022-10-13', 2], ['2022-10-14', 0], ['2022-10-15', 4], ['2022-10-16', 1], ['2022-10-17', 1], ['2022-10-18', 1], ['2022-10-19', 0], ['2022-10-20', 1], ['2022-10-21', 0], ['2022-10-22', 3], ['2022-10-23', 1], ['2022-10-24', 0], ['2022-10-25', 1], ['2022-10-26', 3], ['2022-10-27', 3], ['2022-10-28', 1], ['2022-10-29', 1], ['2022-10-30', 2], ['2022-10-31', 1], ['2022-11-01', 0], ['2022-11-02', 0], ['2022-11-03', 0], ['2022-11-04', 0], ['2022-11-05', 1], ['2022-11-06', 1], ['2022-11-07', 0], ['2022-11-08', 2], ['2022-11-09', 0], ['2022-11-10', 3], ['2022-11-11', 1], ['2022-11-12', 0], ['2022-11-13', 4], ['2022-11-14', 2], ['2022-11-15', 0], ['2022-11-16', 0], ['2022-11-17', 6], ['2022-11-18', 0], ['2022-11-19', 1], ['2022-11-20', 2], ['2022-11-21', 0], ['2022-11-22', 0], ['2022-11-23', 0], ['2022-11-24', 0], ['2022-11-25', 0], ['2022-11-26', 0], ['2022-11-27', 1], ['2022-11-28', 0], ['2022-11-29', 0], ['2022-11-30', 1], ['2022-12-01', 0], ['2022-12-02', 0], ['2022-12-03', 0], ['2022-12-04', 0], ['2022-12-05', 0], ['2022-12-06', 0], ['2022-12-07', 0], ['2022-12-08', 0], ['2022-12-09', 0], ['2022-12-10', 0], ['2022-12-11', 0], ['2022-12-12', 0], ['2022-12-13', 2], ['2022-12-14', 1], ['2022-12-15', 0], ['2022-12-16', 2], ['2022-12-17', 0], ['2022-12-18', 0], ['2022-12-19', 1], ['2022-12-20', 0], ['2022-12-21', 1], ['2022-12-22', 0], ['2022-12-23', 0], ['2022-12-24', 0], ['2022-12-25', 0], ['2022-12-26', 0], ['2022-12-27', 0], ['2022-12-28', 2], ['2022-12-29', 0], ['2022-12-30', 0], ['2022-12-31', 0], ['2023-01-01', 2], ['2023-01-02', 0], ['2023-01-03', 0], ['2023-01-04', 0], ['2023-01-05', 0], ['2023-01-06', 0], ['2023-01-07', 0], ['2023-01-08', 0], ['2023-01-09', 0], ['2023-01-10', 0], ['2023-01-11', 2], ['2023-01-12', 0], ['2023-01-13', 0], ['2023-01-14', 0], ['2023-01-15', 0], ['2023-01-16', 0], ['2023-01-17', 3], ['2023-01-18', 4], ['2023-01-19', 1], ['2023-01-20', 2], ['2023-01-21', 3], ['2023-01-22', 2], ['2023-01-23', 0], ['2023-01-24', 0], ['2023-01-25', 0], ['2023-01-26', 1], ['2023-01-27', 2], ['2023-01-28', 1], ['2023-01-29', 2], ['2023-01-30', 0], ['2023-01-31', 0], ['2023-02-01', 2], ['2023-02-02', 1], ['2023-02-03', 2], ['2023-02-04', 2], ['2023-02-05', 0], ['2023-02-06', 0], ['2023-02-07', 2], ['2023-02-08', 1], ['2023-02-09', 3], ['2023-02-10', 1], ['2023-02-11', 0], ['2023-02-12', 1], ['2023-02-13', 1], ['2023-02-14', 0], ['2023-02-15', 0], ['2023-02-16', 1], ['2023-02-17', 0]
        ]
      }
    })
})
</script>

<template>
  <div ref="heatMap" class="about"></div>
</template>


<style lang="less" scoped>
.about {
  width: 37.6875rem;
  height: 11.5625rem;
}
</style>