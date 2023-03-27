<script setup>
/**
 * @说明: 首页
 * @作者: Aoki
 * @时间: 2023/02/17 17:22:22
 */
import mock from '@/mock/mockjs';
import { getCurrentInstance, onMounted, ref } from 'vue';

const { proxy } = getCurrentInstance();
const title = ref('博客君');
let listImage = ref([])
console.log('dd+', mock.mockid());
onMounted(() => {
  proxy.$http.get('/dev/api/image/girl/list/random?count=1&app_id=l8lesimwu6oumkj9&app_secret=cWdQQnp0Nnd6QUpweFJhM2F1L0ZwZz09').then((res) => {
    if (res.data.code === 1) {
      listImage.value=res.data.data
    }
  });
});

</script>


<template>
  <h1>{{ title }}</h1>
  <div class="image">
    <div class="image_box" v-for="item in listImage.slice(0,9)">
      <img style="width: 300px;height: 150px" :src="item.imageUrl" alt="">
    </div>
  </div>
</template>


<style lang="less" scoped>
.about {
  height: 400px;
  width: 100%;
}
.image{
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.image_box img{
  display: inline-block;
}
</style>