<script setup>
/**
 * @说明: 相册
 * @作者: Aoki
 * @时间: 2023/02/17 17:22:22
 */
import { onMounted, ref } from 'vue'
import { get } from '@/utils/http/http.js'
import { girllistrandom, parms } from '@/utils/http/api'

const title = ref('博客君')
let listImage = ref([])
onMounted(() => {
  GetImage()
})

async function GetImage() {
  let res = await get(girllistrandom,parms)
  if (res.code === 1) {
    listImage.value = res.data
  }
}

</script>


<template>
  <h1>{{ title }}</h1>
  <div class="image">
    <div v-for="(item,i) in listImage.slice(0,9)" :key="i" class="image_box">
      <img :src="item.imageUrl" alt="" style="width: 300px;height: 150px">
    </div>
  </div>
</template>


<style lang="less" scoped>
.about {
  height: 400px;
  width: 100%;
}
.image {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.image_box img {
  display: inline-block;
}
</style>