<template>
  <div class="chat-box">
    <div class="message" v-for="(msg, index) in messages" :key="index" :class="{ 'left': msg.sender === 'other', 'right': msg.sender === 'me' }">
      <div class="bubble">{{ msg.content }}</div>
    </div>
    <div class="input-box">
      <textarea class="input" v-model="newMessage"></textarea>
      <button class="send-button" @click="sendMessage">发送</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        { sender: 'other', content: '你好，有什么可以帮助你的吗？' },
        { sender: 'me', content: '请问这个产品支持哪些支付方式？' },
        { sender: 'other', content: '我们支持支付宝、微信、银联等多种支付方式。' },
      ],
      newMessage: '',
    }
  },
  methods: {
    sendMessage() {
      this.messages.push({ sender: 'me', content: this.newMessage })
      this.newMessage = ''
    },
  },
}
</script>

<style scoped>
.chat-box {
  position: relative;
  width: 890px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.message {
  display: flex;
  margin: 10px 0;
}
.message.left:last-child{
  padding-bottom: 120px;
}
.message.right:last-child{
  padding-bottom: 120px;
}
.message.left{
  justify-content: flex-start;
}
.message.right{
  justify-content: flex-end;
}

.left .bubble {
  background-color: #fff;
  border-radius: 15px 15px 15px 0;
  padding: 10px;
  max-width: 80%;
}

.right .bubble {
  background-color: #00bcd4;
  border-radius: 15px 15px 0 15px;
  padding: 10px;
  max-width: 80%;
}

.input-box {
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  /* left: 0; */
  width: 890px;
  background-color: #f5f5f5;
  padding: 10px;
}

.input {
  height: 80px;
  flex-grow: 1;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
}

.send-button {
  background-color: #2196f3;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
}
</style>