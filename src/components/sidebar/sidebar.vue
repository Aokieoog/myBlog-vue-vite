<script setup>
import { reactive, ref } from 'vue'

const shadowGroup = ref([
  {
    name: 'Basic Shadow',
    type: ''
  }
])
const datalist = reactive([
    { sidebar: '首页' },
    { sidebar: '相册' },
    { sidebar: '仓库' },
    { sidebar: '日记' },
    { sidebar: '关于' },
    { sidebar: '分类' },
    { sidebar: '设置' }
  ]
)


</script>

<template>
  <div class="sidebar">
    <div class="sidebar-header"></div>
    <ul>
      <li v-for="(item) in datalist">{{ item.sidebar }}</li>
    </ul>
    <ul>
      <li>{{ shadowGroup[0].name }}</li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar-header{
  width: 13.75rem;
  height: 6.25rem;
  background-color: #646cff;
}
ul {
  padding: 0;
}
</style>
