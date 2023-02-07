<script setup>
import { reactive } from 'vue'

const datalist = reactive([
    { sidebar: '首页', toa: 'home', icon: 'icon-shouye' },
    { sidebar: '朋友', toa: 'oilPrices', icon: 'icon-pinglun' },
    { sidebar: '相册', toa: '404', icon: 'icon-tupian' },
    { sidebar: '日记', toa: 'home', icon: 'icon-dingdan' },
    { sidebar: '分类', toa: 'home', icon: 'icon-quan' },
    { sidebar: '设置', toa: 'home', icon: 'icon-gengduo' }
  ]
)
</script>

<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <div class="sidebar-header-devone"><img alt="" src="/log.png">
        <i></i>
      </div>
      <div style="width: 6.11rem;line-height: 1.2">
        <p style="font-size: 14px;margin: 0;"><strong style="font-weight: bold">景色宜人</strong></p>
        <span style="font-size: 12px">The Best Is Yet To Come.</span>
      </div>
    </div>
    <ul v-for="(item) in datalist">
      <li>
        <router-link :to="item.toa">
          <svg-icon :iconName="item.icon"></svg-icon>
          {{ item.sidebar }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar-header i {
  width: 0.4375rem;
  height: 0.4375rem;
  margin-bottom: 5px;
  margin-left: 5px;
  border-radius: 50%;
  background-color: #3ef13e;
}
.sidebar-header img {
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 50%;
}
.sidebar-header-devone {
  display: flex;
  align-items: flex-end;
}
a {
  color: #878787;
  padding: 0 4rem;
}
.sidebar-header {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 13.75rem;
  height: 5.625rem;
  padding-top: 0.625rem;
}
ul {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}
ul li {
  line-height: 2rem;
  width: 12.5rem;
  height: 2rem;
  border-radius: 5px;
}
li:hover {
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
