<script setup>
import { reactive } from 'vue'

const datalist = reactive([
    { sidebar: '首页', toa: 'home' },
    { sidebar: '相册', toa: 'oilPrices' },
    { sidebar: '仓库', toa: '404' },
    { sidebar: '日记', toa: 'home' },
    { sidebar: '关于', toa: 'home' },
    { sidebar: '分类', toa: 'home' },
    { sidebar: '设置', toa: 'home' }
  ]
)


</script>

<template>
  <div class="sidebar">
    <div class="sidebar-header"></div>
    <ul v-for="(item) in datalist">
      <li>
        <router-link :to="item.toa">{{ item.sidebar }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
a{
  padding: 7px 70px;
  background-color: #e1e1e1;
  border-radius: 7px;
}
.sidebar-header {
  width: 13.75rem;
  height: 6.25rem;
  background-color: #646cff;
}
ul {
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}
ul li {
  position: relative;
  margin-bottom: 2px;
  padding: 6px 10px;
  border-radius: 5px;
}
a:hover {
  background-color: #ececec;
}
ul li:after {
  position: absolute;
  top: -10px;
  right: -10px;
  bottom: -10px;
  left: -10px;
}
</style>
