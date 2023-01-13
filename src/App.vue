<script setup>
import Sidebar from './components/sidebar/sidebar.vue'
</script>

<template>

    <div class="common-layout">
      <el-container>
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
    </div>

</template>

<style>
html, body {
  font-size:16px
}
body {
  background-color:#efefef;
}
#app{
  height: 100vh;
}
.common-layout{
  padding: 0 !important;
}
.el-container{
  width: 73.125rem;
}
.el-aside{
  height: 100vh;
  width: 13.75rem;
  position: fixed;
  background: #f9f9f9;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
}
.el-header{
  position: fixed;
  height: 3.125rem;
  width: 73.125rem;
  z-index: 10;
  background: #f9f9f9;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}
.el-main{
  /* calc 可以用来计算加减乘除 */
  width: calc(73.125rem - 13.75rem);
  float: right;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}
</style>
