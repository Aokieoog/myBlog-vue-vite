<script setup>
import { ref } from 'vue';

// 定义数据类型
// defineProps({
//   msg: String,
// });
const count = ref(0);
const msg = ref('内容')
</script>

<template>
  <h1>{{ msg }}</h1>
  <h1>{{ msg }}</h1>
  <h1>{{ msg }}</h1>
  <h1>{{ msg }}</h1>
  <h1>{{ msg }}</h1>
  <h1>{{ msg }}</h1>
  <h1>{{ msg }}</h1>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
