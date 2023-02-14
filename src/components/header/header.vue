<script setup>
import SearchBox from '../searchBox/searchBox.vue';</script>

<template>
  <div class="log">
    <img alt="" src="https://www.ihewro.com/logo.svg" type="image/svg+xml">
  </div>
  <div class="box">
    <div class="searchBox">
      <SearchBox></SearchBox>
    </div>
  </div>
</template>

<style lang="less" scoped>
.log {
  width: 13.75rem;
  height: 3.125rem;
  float: left;
  img {
    width: 8.125rem;
    height: 2.5rem;
  }
}
.searchBox {
  float: left;
  width: 14.6875rem;
  height: 3.125rem;
}
.box{
  width: 59.375rem;
  height: 3.125rem;
  margin: 0 0 0 13.75rem;
}
</style>
