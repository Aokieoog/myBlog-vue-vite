<script setup>
import SvgIcon from '../svgIconFont/svgIcon.vue'</script>

<template>
  <div>
    <input placeholder="搜索" />
    <el-button plain type="">
      <svg-icon icon-name="icon-sousuo"></svg-icon>
    </el-button>
  </div>

</template>

<style lang="less" scoped>
div {
  width: 12.375rem;
  height: 1.875rem;
  border-radius: 0.9375rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: #ffffff;
}
input {
  float: left;
  width: 9.24rem;
  height: 1.875rem;
  border-radius: 0.9375rem 0 0 0.9375rem;
  border: none;
  padding: 0 0 0 0.9375rem;
}
input:hover {
  background-color: #e0e6ed;
}
input:focus {
  outline: 1px solid #448bff; //边框不用border，用outline
}
.el-button {
  float: right;
  width: 2.1875rem;
  height: 1.875rem;
  font-weight: 700;
  border: none;
  border-radius: 0 0.9375rem 0.9375rem 0;
}
.el-button:active{
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
}
</style>