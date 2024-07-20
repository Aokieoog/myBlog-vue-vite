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
      <Sidebar></Sidebar>
      <div class="contbox">
        <!--左菜单侧栏预留-->
          <!-- <el-aside>
          </el-aside> -->
        <!--路由内容区-->
          <el-main class="mainbox">
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

<style lang="less" scoped>
.mainbox{
  margin:0 5%
}
.routerpart{
  width:100vw;
  display:flex;
  flex-direction: column;
}
.contbox{
  width:100%;
  display:flex;
  margin-top:60px;
}
html, body {
  font-size: 16px;
  background-color: #efefef;
}
/* 全局路由 */
.globalRouting {
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
