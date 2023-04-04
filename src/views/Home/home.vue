<script setup>
/**
 * @说明: 首页
 * @作者: Aoki
 * @时间: 2023/02/17 17:22:22
 */

import { getCurrentInstance, onMounted, ref } from 'vue'

const { proxy } = getCurrentInstance()
let title = ref('')
let text =  ref('')


onMounted(() => {

})
function Fasong() {
  proxy.$http.post('https://api.openai.com/v1/chat/completions', {
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: title.value }],
    temperature: 0.7
  }, {
    headers: {
      contentType: 'application/json;charset=UTF-8',
      Authorization: 'Bearer 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'
    }
  }).then((res) => {
    text.value = res.data.choices[0].message.content
  })
}

</script>


<template>
  <span>{{text}}</span>
  <el-input v-model="title">{{ title }}</el-input>
  <el-button @click="Fasong">Click</el-button>

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