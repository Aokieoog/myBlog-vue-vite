<script setup>
import { ref } from 'vue'

const shadowGroup = ref([
  {
    name: 'Basic Shadow',
    type: ''
  }
])
// const getCssVarName = (type: string) => {
//   return `--el-box-shadow${type ? '-' : ''}${type}`;
// };

</script>

<template>
  <div class="sidebar">
    <h1>11</h1>
    <ul>
      <li>用户管理</li>
      <li>账户管理</li>
      <li>密码管理</li>
      <li>个性签名</li>
    </ul>
    <ul>
      <li>{{ shadowGroup[0].name }}</li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  padding: 0;
}
</style>
