<script setup>
import { reactive, ref } from 'vue'

const datalist = reactive([
    { sidebar: '首页', toa: 'home', icon: 'icon-shouye' },
    { sidebar: '每日油价', toa: 'oilPrices', icon: 'icon-pinglun' },
    { sidebar: '相册', toa: 'PhotoAlbum', icon: 'icon-tupian' },
    { sidebar: '日记', toa: 'diary', icon: 'icon-dingdan' },
    { sidebar: '分类', toa: 'home', icon: 'icon-quan' },
    { sidebar: '设置', toa: 'home', icon: 'icon-gengduo' }
  ]
)
const isCollapse = ref(false)
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<template>
  <div class="sidebar">
    <el-menu
      router
      :default-active="$route.path"
      :collapse="isCollapse"
      class="el-menu-vertical-demo"
      @close="handleClose"
      @open="handleOpen"
    >
      <div class="sidebar-header">
        <div class="sidebar-header-devone" @click="!isCollapse" ><img alt="" src="/log.png">
          <i></i>
        </div>
        <div style="line-height: 1.2">
          <p style="font-size: 14px;margin: 0;"><strong style="font-weight: bold">景色宜人</strong></p>
          <span style="font-size: 12px">The Best Is Yet To Come.</span>
        </div>
      </div>
      <el-menu-item v-for="(item,i) in datalist" :key="i" :index="item.toa">
        <svg-icon :iconName="item.icon"></svg-icon>&nbsp;
        <template #title>{{ item.sidebar }}</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="less" scoped>
.sidebar{
  User-select: none
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  height: 100%;
}
.sidebar-header i {
  width: 0.4375rem;
  height: 0.4375rem;
  margin-bottom: 0.3125rem;
  margin-left: 0.3125rem;
  border-radius: 50%;
  background-color: #3ef13e;
}
.sidebar-header img {
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 50%;
  box-shadow: 2px 2px 3px #e1e1e1;
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
  height: 5.625rem;
  padding-top: 0.625rem;
  justify-content: center;
}
</style>
