<script setup>
import { ref } from 'vue'
import Sidebar from './components/sidebar/sidebar.vue'
</script>

<template>

  <div class="common-layout">
    <!--局部路由-->
    <el-container v-if="!this.$route.meta.fullPageDisplay">
      <!--头部-->
      <el-header>Header</el-header>
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
    <!--全局路由-->
    <router-view v-if="this.$route.meta.fullPageDisplay" v-slot="{ Component }" class="globalRouting">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
  </div>

</template>

<style>
html, body {
  font-size: 16px;
  background-color: #efefef;
}
/* #app {
  height: 100vh;
} */
.common-layout {
  padding: 0 !important;
}
.el-container {
  width: 73.125rem
}
/* 左侧边栏 */
.el-aside {
  position: fixed;
  /* width: 13.75rem; */
  height: 100vh;
  margin-top: 3.8rem;
  background: #f9f9f9;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
}
/* 顶部 */
.el-header {
  position: fixed;
  z-index: 10;
  width: 73.125rem;
  height: 3.125rem;
  background: #f9f9f9;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}
/* 路由内容区 */
.el-main {
  /* calc 可以用来计算加减乘除 */
  float: right;
  width: calc(73.125rem - 13.75rem);
  height: 100vh;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}
/* 全局路由 */
.globalRouting {
  height: 100%;
}
</style>
