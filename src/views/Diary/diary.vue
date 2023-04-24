<script setup>

</script>

<template>
  <div></div>
</template>

<style scoped>
.chat-box {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 890px;
  height: 100%;
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
}
.right .bubble {
  max-width: 80%;
  padding: 10px;
  border-radius: 15px 15px 0 15px;
  background-color: #00bcd4;
}
.input-box {
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  /* left: 0; */
  width: 890px;
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
.send-button {
  padding: 10px;
  cursor: pointer;
  color: #fff;
  border: none;
  border-radius: 5px;
  background-color: #2196f3;
}
</style>