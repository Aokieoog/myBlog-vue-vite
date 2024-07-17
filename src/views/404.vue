<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})
const mistake = ref('404资源开小差了......')
</script>

<template>
  <h1>{{ mistake }}</h1>
</template>

<style scoped>
/* h1 {
  height: 900px;
} */
</style>
