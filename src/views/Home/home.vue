<script setup>
/**
 * @说明: 首页
 * @作者: Aoki
 * @时间: 2023/02/17 17:22:22
 */
import { nextTick, reactive, ref } from 'vue'
import { post } from '@/utils/http/http.js'

let messages = reactive([
  { role: 'assistant', content: '你好，有什么可以帮助你的吗？' },
  { role: 'user', content: '请问这个产品支持哪些支付方式？' },
  { role: 'assistant', content: '我们支持支付宝、微信、银联等多种支付方式。' }
])
let newMessage = ref('')
let chatboxdiv = ref(null)
let centerDialogVisible = ref(false)
let skyinput = ref('')
const sky = ref(null)


const scrollToBottom = () => {
  nextTick(() => {
    chatboxdiv.value.scrollTop = chatboxdiv.value.scrollHeight
  })
}

// 检测是否存在SKY
function Skytrue() {
  try {
    sky.value = localStorage.getItem('Sky')
  } catch (error) {
    console.error('Failed to retrieve data from local storage:', error)
  }
  if (!sky.value) {
    centerDialogVisible.value = true
  }
}

function CenterDialog() {
    localStorage.setItem('Sky', skyinput.value)
}
async function sendMessage() {
  Skytrue()
  console.log(sky.value)
  if (newMessage.value && sky.value) {
    messages.push({ role: 'user', content: newMessage.value })
    newMessage.value = ''
    await nextTick(() => {
      scrollToBottom()
    })
    let data = {
      model: 'gpt-3.5-turbo',
      messages: messages,
      temperature: 0.7
    }
    const config = {
      headers: {
        contentType: 'application/json;charset=UTF-8',
        Authorization: `Bearer ${sky.value}`
      }
    }
    // 异步写法
    let res = await post('https://closeai.deno.dev/v1/chat/completions', data, config)
    messages.push({ role: 'assistant', content: res.choices[0].message.content })
    await nextTick(() => {
      scrollToBottom()
    })
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
    <div ref="chatboxdiv" class="chat-box-div">
      <div v-for="(data, index) in messages" :key="index" :class="{ 'left': data.role === 'assistant', 'right': data.role === 'user' }" class="message">
        <div class="bubble">{{ data.content }}</div>
      </div>
    </div>
    <div class="input-box">
      <el-input v-model.trim="newMessage" :rows="3" class="input" placeholder="请输入内容" resize="none" type="textarea" @keydown.enter.prevent="sendMessage"></el-input>
      <el-button class="send-button" @click="sendMessage">发送</el-button>
    </div>
  </div>

  <el-dialog v-model="centerDialogVisible" center title="Sky" width="30%">
    <span>
      <el-input v-model.trim="skyinput"></el-input>
    </span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="centerDialogVisible = false">关闭</el-button>
        <el-button type="primary" @click="centerDialogVisible = false,CenterDialog()">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>


<style lang="less" scoped>
.chat-box {
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 591px;
  //background-color: #e6e6e6;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  overflow-y: auto;
  position: relative;
  top: 1rem;
  margin: 0 auto;
}
.chat-box-div {
  overflow-y: auto;
  width: 800px;
  height: 500px;
}
.message {
  display: flex;
  margin: 10px 0;
}
.message.left:last-child {
  padding-bottom: 20px;
}
.message.right:last-child {
  padding-bottom: 20px;
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
  background-color: #27ae60;
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
  margin-right: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
}
</style>