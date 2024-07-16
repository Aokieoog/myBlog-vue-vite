<script setup>
import Sidebar from '@/components/sidebar/sidebar.vue';
import Header from '@/components/header/header.vue';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';

const route = useRoute();
/**
 * route.name 获取name
 * route.matched 获取matched数组,包含内部所有信息
 * route.meta 获取其路由元信息
 */
// onMounted(() => {
//   console.log(route.name)
//   console.log(route.matched)
//   console.log(route.meta)
//   console.log(route.meta.fullPageDisplay)
// })
</script>

<template>
  <div>
    <!--全局路由-->
    <router-view v-if="route.meta.fullPageDisplay" v-slot="{ Component }" class="globalRouting">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
    <!--局部路由-->
    <el-container class="routerpart" v-if="!route.meta.fullPageDisplay">
      <!--头部-->
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
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
          <el-aside>
            <Sidebar></Sidebar>
          </el-aside>
      </el-container>
    </el-container>

  </div>
</template>

<style>
.routerpart{
  height: 100vh;
  width: 80vw;
  overflow:hidden;
}
html, body {
  font-size: 16px;
  background-color: #efefef;
}
/* 侧边栏 */
.el-aside {
  width: 15vw !important;
  background: #f9f9f9;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
}
/* 顶部 */
.el-header {
  height: 3.125rem !important;
  background: #f9f9f9;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}
/**
 *路由内容区
 *calc 可以用来计算加减乘除
 */
.el-main {
  height: 100vh;
  overflow:scroll;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}
/* 全局路由 */
.globalRouting {
  height: 100%;
}
</style>
