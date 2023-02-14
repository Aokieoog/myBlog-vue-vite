<script setup>
import SvgIcon from '../svgIconFont/svgIcon.vue'</script>

<template>
  <div>
    <el-input></el-input>
    <span>
      <svg-icon icon-name="icon-sousuo"></svg-icon>
    </span>
  </div>

</template>

<style lang="less" scoped>
div {
  width: 12.375rem;
  height: 1.875rem;
  border: 1px solid black;
  border-radius: 0.9375rem;
  .el-input {
    width: 10.125rem;
    height: 1.875rem;
    border: none;
  }
  span {
    width: 2.1875rem;
    height: 1.875rem;
  }
}
</style>