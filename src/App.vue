<script setup>
import Header from './components/sidebar/sidebar.vue'
</script>

<template>

    <div class="common-layout">
      <el-container>
        <el-aside width="200px">
          <Header></Header>
        </el-aside>
        <el-container>
          <el-header>Header</el-header>
          <el-main width="200px" height="500px">
              <!-- 传一个组件在router-view中 -->
              <router-view  v-slot="{ Component }">
                <keep-alive>
                  <component :is="Component"></component>
                </keep-alive>
              </router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>

</template>

<style scoped>
.common-layout{
  padding: 0 !important;
}
.el-container{
  width: 1450px;
}
.el-aside{
  height: 100vh;
  width: 260px;
  position: fixed;
  background: #f9f9f9;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
}
.el-header{
  position: fixed;
  height: 50px;
  width: 1450px;
  z-index: 10;
  background: #f9f9f9;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}
.el-main{
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}
</style>
