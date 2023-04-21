<script setup>
import { getCurrentInstance, onMounted, ref, nextTick } from 'vue'

const { proxy } = getCurrentInstance()
let main = ref(null)
onMounted(() => {
  nextTick(()=>{
    const myChart = proxy.$echarts.init(main.value)
    myChart.setOption({
      tooltip: {
        trigger: 'item',
        formatter: '分类 <br/>{b} : {c} ({d}%)'
      },
      series: [
        {
          type: 'pie',
          radius: '65%',
          center: ['50%', '50%'],
          selectedMode: 'single',
          data: [
            { 'name': '设计作品', 'value': '11' }, { 'name': '技巧杂烩', 'value': '46' }, { 'name': '生活随笔', 'value': '118' }, { 'name': '相册图片', 'value': '7' }, { 'name': '无处安放', 'value': '2' }, { 'name': '日记心事', 'value': '2' }, {
              'name': '兴趣爱好',
              'value': 17
            }, { 'name': '学习笔记', 'value': 56 }, { 'name': '都有明天', 'value': 1 }, { 'name': '分类加密', 'value': '0' }, { 'name': '微信分类', 'value': '0' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
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

<style scoped>
.about {
  width: 276px;
  height: 240px;
}
</style>