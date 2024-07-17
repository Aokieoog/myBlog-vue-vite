<script setup>
import { reactive, ref } from 'vue'

const datalist = reactive([
    { sidebar: '首页', toa: 'home', icon: 'icon-shouye' },
    { sidebar: '休息一下', toa: 'PhotoAlbum', icon: 'icon-tupian' },
    { sidebar: '今日油价', toa: 'oilPrices', icon: 'icon-pinglun' },
    { sidebar: '网络地址', toa: 'diary', icon: 'icon-dingdan' },
    { sidebar: '剑三账本', toa: 'js3book', icon: 'icon-dingdan' },
    // { sidebar: '分类', toa: 'home', icon: 'icon-quan' },
    // { sidebar: '设置', toa: 'home', icon: 'icon-gengduo' }
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
      mode="horizontal"
      background-color="#24292e"
      text-color="#ffffff"
      :default-active="$route.path"
      :collapse="isCollapse"
      class="sidmenu"
      @close="handleClose"
      @open="handleOpen"
    >
      <el-menu-item v-for="(item,i) in datalist" :key="i" :index="item.toa">
        <!-- <svg-icon :iconName="item.icon"></svg-icon>&nbsp; -->
        <template #title>{{ item.sidebar }}</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="less" scoped>
.sidmenu{
  padding:0 5%
}
.sidebar{
  position:fixed;
  width:100vw;
  height:60px;
  z-index:99999;
}
</style>
