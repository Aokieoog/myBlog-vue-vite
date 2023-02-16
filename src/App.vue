<script setup>
import Sidebar from '@/components/sidebar/sidebar.vue'
import Header from '@/components/header/header.vue'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'

const route = useRoute()
/**
 * route.name 获取name
 * route.matched 获取matched数组,包含内部所有信息
 * route.meta 获取其路由元信息
 */
onMounted(() => {
  console.log(route.name)
  console.log(route.matched)
  console.log(route.meta)
  console.log(route.meta.fullPageDisplay)
})
</script>

<template>
  <div class="common-layout">
    <!--全局路由-->
    <router-view v-if="route.meta.fullPageDisplay" v-slot="{ Component }" class="globalRouting">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
    <!--局部路由-->
    <el-container v-if="!route.meta.fullPageDisplay">
      <!--头部-->
      <el-header>
        <Header></Header>
      </el-header>
      <div>
        <!--左菜单侧栏-->
        <el-aside>
          <Sidebar></Sidebar>
        </el-aside>
        <!--路由内容区-->
        <el-main>
          <!-- 传一个组件在router-view中 -->
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component"></component>
            </keep-alive>
          </router-view>
        </el-main>
      </div>
    </el-container>

  </div>
</template>

<style>
html, body {
  font-size: 16px;
  background-color: #efefef;
}
.common-layout {
  padding: 0 !important;
}
.el-container {
  width: 73.125rem
}
/* 左侧边栏 */
.el-aside {
  position: fixed;
  width: 13.7rem !important;
  height: 100vh;
  margin-top: 3.2rem;
  background: #f9f9f9;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
}
/* 顶部 */
.el-header {
  position: fixed;
  z-index: 10;
  padding: 0 !important;
  width: 73.125rem;
  height: 3.125rem !important;
  background: #f9f9f9;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}
/**
 *路由内容区
 *calc 可以用来计算加减乘除
 */
.el-main {
  float: right;
  width: calc(73.125rem - 13.75rem);
  height: 100vh;
  padding-top: 3.2rem !important;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}
/* 全局路由 */
.globalRouting {
  height: 100%;
}
</style>
