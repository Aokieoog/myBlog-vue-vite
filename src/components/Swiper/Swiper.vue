<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue' // swiper所需组件
// 这是分页器和对应方法，swiper好像在6的时候就已经分离了分页器和一些其他工具
import { A11y, Autoplay, Navigation, Pagination } from 'swiper'
// 引入swiper样式，对应css 如果使用less或者css只需要把scss改为对应的即可
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
//默认滑动效果（这里面注释掉的可以不要）
// const onSwiper = swiper => {
// 	console.log(swiper);
// };
// const onSlideChange = e => {
// 	// swiper切换的时候执行的方法
// 	console.log('slide change', e.activeIndex);
// };
// setup语法糖只需要这样创建一个变量就可以正常使用分页器和对应功能，如果没有这个数组则无法使用对应功能
const modules = [Autoplay, Pagination, Navigation, A11y]
const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="swiperbox">
    <swiper
      :autoplay="{
				delay: 2500,
				disableOnInteraction: false
			}"
      :centeredSlides="true"
      :loop="true"
      :modules="modules"
      :navigation="true"
      :pagination="{
				clickable: true
			}"
      :slidesPerView="1"
      :spaceBetween="30"
      class="mySwiper"
    >
      <swiper-slide v-for="(data,index) in props.data" :key="index"><img :src="data" alt="" /></swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
.mySwiper {
  width: 500px;
  height: 300px;
}
.swiper-slide {
  font-size: 18px;
  display: -webkit-box;
  display: -ms-flexbox;
  /* Center slide text vertically */
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  text-align: center;
  background: #fff;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
}
.mySwiper img {
  width: 500px;
  height: 300px;
  object-fit: cover;
}
:deep(.swiper-pagination) .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: rgb(229, 180, 127);
}
:deep(.swiper-pagination-bullet) {
  width: 14px;
  height: 14px;
  background-color: #fff;
}
.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
:deep(.swiper-pagination-horizontal.swiper-pagination-bullets) .swiper-pagination-bullet {
  margin: 0 8px;
}
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  color: rgb(229, 180, 127);
}
</style>

