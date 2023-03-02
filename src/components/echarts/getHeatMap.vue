<script setup>
/**
 * @说明: 热力图
 * @作者: Aoki
 * @时间: 2023/02/17 17:22:22
 */
import { getCurrentInstance, onMounted, ref } from 'vue'

const { proxy } = getCurrentInstance()
let heatMap = ref(null)
let name = ref('热力图')

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
  getVirtualData()
  const myChart = proxy.$echarts.init(heatMap.value)
  myChart.setOption({
    tooltip: {
      formatter: function (params) {
        return '降雨量: ' + params.value[1]
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
      itemStyle: {
        color: '#ccc',
        borderWidth: 1,
        borderColor: '#fff'
      },
      color: 'red',
      range: '2016',
      splitLine: true,
      dayLabel: {
        firstDay: 7
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
      silent: {
        show: false
      }
    },
    series: {
      itemStyle: {
        color: ['red', 'green', '#fff', '#ccc']
      },
      type: 'heatmap',
      coordinateSystem: 'calendar',
      data: [
        [1451577600000, 1],
        [1451664000000, 2],
        [1451750400000, 5],
        [1451836800000, 0],
        [1451923200000, 0],
        [1452009600000, 0],
        [1452096000000, 0],
        [1452182400000, 0],
        [1452268800000, 0],
        [1452355200000, 0],
        [1452441600000, 0],
        [1452528000000, 0],
        [1452614400000, 0],
        [1452700800000, 0],
        [1452787200000, 0],
        [1452873600000, 0],
        [1452960000000, 0],
        [1453046400000, 0],
        [1453132800000, 0],
        [1453219200000, 0],
        [1453305600000, 0],
        [1453392000000, 0],
        [1453478400000, 0],
        [1453564800000, 0],
        [1453651200000, 0],
        [1453737600000, 2],
        [1453824000000, 2],
        [1453910400000, 3],
        [1453996800000, 0],
        [1454083200000, 6],
        [1454169600000, 0],
        [1454256000000, 7],
        [1454342400000, 0],
        [1454428800000, 0],
        [1454515200000, 0],
        [1454601600000, 0],
        [1454688000000, 0],
        [1454774400000, 1],
        [1454860800000, 2],
        [1454947200000, 1],
        [1455033600000, 1],
        [1455120000000, 1],
        [1455206400000, 2],
        [1455292800000, 3],
        [1455379200000, 1],
        [1455465600000, 4],
        [1455552000000, 1],
        [1455638400000, 4],
        [1455724800000, 2],
        [1455811200000, 2],
        [1455897600000, 2],
        [1455984000000, 2],
        [1456070400000, 2],
        [1456156800000, 2],
        [1456243200000, 1],
        [1456329600000, 1],
        [1456416000000, 1],
        [1456502400000, 3],
        [1456588800000, 4],
        [1456675200000, 2]
      ]
    }
  })
})
</script>

<template>
  <div class="box">
    <p>{{ name }}</p>
    <div ref="heatMap" class="about"></div>
  </div>
</template>


<style lang="less" scoped>
.box {
  width: 316px;
  height: 289px;
  p {
    width: 281px;
    height: 19px;
    font-size: 14px;
    text-align: left;
    line-height: 20px;
    color: #777777;
    margin: 5px 0 10px 21px;
  }
}
.about {
  width: 275px;
  height: 240px;
}
</style>