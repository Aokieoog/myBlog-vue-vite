<script setup>
/**
 * @说明: 相册
 * @作者: Aoki
 * @时间: 2023/02/17 17:22:22
 */
import { nextTick, ref } from 'vue'
import { get } from '@/utils/http/http.js'
import { girllistrandom, parms } from '@/utils/http/api'
import Swiper from '@/components/Swiper/Swiper.vue'

const title = ref('博客君')
let listImage = ref([])
// MD:问题3
let imageurl = ref([])
// MD:问题3end
nextTick(()=>{
  GetImage()
})
async function GetImage() {
  let res = await get(girllistrandom, parms)
  if (res.code === 1) {
    listImage.value = res.data
    res.data.forEach((r) => {
      imageurl.value.push(r.imageUrl)
    })
  }
}

</script>
<template>
  <h1>{{ title }}</h1>
  <Swiper :data="imageurl"></Swiper>
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