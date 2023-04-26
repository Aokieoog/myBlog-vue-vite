<script setup>
/**
 * @说明: 首页
 * @作者: Aoki
 * @时间: 2023/02/17 17:22:22
 */
import { onMounted, reactive, ref } from 'vue'
import { post } from '@/utils/http/http.js'

let messages = reactive([
  { role: 'assistant', content: '你好，有什么可以帮助你的吗？' },
  { role: 'user', content: '请问这个产品支持哪些支付方式？' },
  { role: 'assistant', content: '我们支持支付宝、微信、银联等多种支付方式。' }
])
let newMessage = ref('')
let refmsg = ref(null)
onMounted(() => {
})

async function sendMessage() {
  if (newMessage.value) {
    messages.push({ role: 'user', content: newMessage.value })
    newMessage.value = ''
    let data = {
      model: 'gpt-3.5-turbo',
      messages: messages,
      temperature: 0.7
    }
    const config = {
      headers: {
        contentType: 'application/json;charset=UTF-8',
        Authorization: 'Bearer SK-cesihi'
      }
    }
    // 异步写法
    let res = await post('https://closeai.deno.dev/v1/chat/completions', data, config)
    messages.push({ role: 'assistant', content: res.choices[0].message.content })
    let container = refmsg.value
    container.scrollTop = container.scrollHeight
    // 传统写法
    /* post('https://closeai.deno.dev/v1/chat/completions', {
     model: 'gpt-3.5-turbo',
     messages: messages,
     temperature: 0.7
     }, {
     headers: {
     contentType: 'application/json;charset=UTF-8',
     Authorization: 'Bearer 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'
     }
     }).then((res) => {
     let datacenter = res.choices[0].message.content
     messages.push({ role: 'assistant', content: datacenter })
     })
     newMessage.value = ''
     let container = refmsg.value
     container.scrollTop = container.scrollHeight */
  }
}


</script>


<template>
  <div ref="refmsg" class="chat-box">
    <div class="chat-box-div">
      <div v-for="(data, index) in messages" :key="index" :class="{ 'left': data.role === 'assistant', 'right': data.role === 'user' }" class="message">
        <div class="bubble">{{ data.content }}</div>
      </div>
    </div>
    <div class="input-box">
      <textarea v-model.trim="newMessage" class="input" @keydown.enter.prevent="sendMessage"></textarea>
      <button class="send-button" @click="sendMessage">发送</button>
    </div>
  </div>

</template>


<style lang="less" scoped>
.chat-box {
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 591px;
  background-color: #448bff;
  overflow-y: auto;
}
.chat-box-div{
  width: 800px;
  height: 500px;
}
.message {
  display: flex;
  margin: 10px 0;
}
.message.left:last-child {
  padding-bottom: 120px;
}
.message.right:last-child {
  padding-bottom: 120px;
}
.message.left {
  justify-content: flex-start;
}
.message.right {
  justify-content: flex-end;
}
.left .bubble {
  max-width: 80%;
  padding: 10px;
  border-radius: 15px 15px 15px 0;
  background-color: #fff;
  text-align: left;
  white-space: pre-line; // 保持返回的文字格式
}
.right .bubble {
  max-width: 80%;
  padding: 10px;
  border-radius: 15px 15px 0 15px;
  background-color: #00bcd4;
  text-align: left;
}
.input-box {
  bottom: 0;
  display: flex;
  align-items: center;
  width: 780px;
  height: 80px;
  padding: 10px;
  background-color: #f5f5f5;
}
.input {
  flex-grow: 1;
  box-sizing: border-box;
  height: 80px;
  min-height: 80px;
  max-height: 80px;
  margin-right: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
}
.send-button {
  padding: 10px;
  cursor: pointer;
  color: #fff;
  border: none;
  border-radius: 5px;
  background-color: #2196f3;
}
</style>