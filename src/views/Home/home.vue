<script setup>
import { ref, getCurrentInstance, inject, onMounted } from 'vue'

const $axios = inject("$axios")
const { proxy } = getCurrentInstance()
let mess = ref('你好呀,每天学习一小点')
const ddd = async () => {
  data = await $axios({ url: "ieee" })
  console.log(data)
}
onMounted(() => {
  ddd()
})
/* $axios.get('/user').then(function (response) {
  console.log(response);
}).catch(function (error) {
  console.log(error);
}); */


</script>


<template>
  <el-form>
    <h1 style="height: 300px">{{ mess }}</h1>
  </el-form>
</template>


<style scoped>

</style>