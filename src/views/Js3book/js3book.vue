<template>
  <div>
    <div class="navbar">
      <button class="active">煮饭</button>
      <button>缝纫</button>
      <button>制药</button>
      <button>锻造</button>
      <button>梓匠</button>
      <input type="text" placeholder="请输入搜索内容" />
      <button></button>
    </div>
    <div class="container-wrapper">
      <div class="container">
        <div class="item">
          <img src="src/assets/png/598.png" alt="Icon" />
          <div class="item-text">绝世上衣·【寒】</div>
          <div class="item-actions">
            <span class="item-span">单价</span>
            <el-input v-model="input" style="width: 50px" />
            <img src="src/assets/png/598.png" alt="Icon" />
            <el-input v-model="input" style="width: 50px" />
            <img src="src/assets/png/598.png" alt="Icon" />
            <el-input v-model="input" style="width: 50px" />
            <img src="src/assets/png/598.png" alt="Icon" />
            <span class="item-span">数量</span>
            <el-input v-model="input" style="width: 80px" />
            <el-button type="success" round>添加</el-button>
          </div>
        </div>
        <div class="item">
          <img src="src/assets/png/598.png" alt="Icon" />
          <div class="item-text">绝世上衣·【弦】</div>
        </div>
        <div class="item">
          <img src="src/assets/png/598.png" alt="Icon" />
          <div class="item-text">绝世上衣·【宿】</div>
        </div>
        <div class="item">
          <img src="src/assets/png/598.png" alt="Icon" />
          <div class="item-text">绝世上衣·【引】</div>
        </div>
      </div>
      <div class="containerright">
        <table></table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
const input = ref('')

const data = reactive({});
</script>

<style scoped lang="less">
.container-wrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 1.25rem;
}
.containerright {
  // width: 70%;
  height: auto;
  background-color: #f8f8f8;
}
.navbar {
  display: flex;
  align-items: center;
  background-color: #f8f8f8;
  padding: 10px;
  border-radius: 5px;
}
.navbar button {
  background-color: #f8f8f8;
  border: none;
  padding: 10px 20px;
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}
.navbar button.active {
  background-color: #4caf50; /* Green color for the active button */
  color: white;
}
.navbar input[type="text"] {
  padding: 10px;
  margin-left: auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}
.navbar input[type="text"]::placeholder {
  color: #ccc;
}
.navbar input[type="text"]:focus {
  outline: none;
  border-color: #4caf50;
}
.navbar input[type="text"] + button {
  background: none;
  border: none;
  padding: 0;
  margin: 0 0 0 5px;
  cursor: pointer;
}
.navbar input[type="text"] + button:before {
  content: "🔍";
  font-size: 18px;
}

.container {
  width: 40rem;
  padding: 0 1.25rem;
  // margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  padding: 10px 0;
}
.item img {
  width: 32px;
  height: 32px;
  margin-right: 10px;
}
.item-text {
  flex: 1;
}
.item-span {
  font-size: 12px;
}
.item-actions {
  display: flex;
  align-items: center;
}
// .item-actions button {
//   background-color: #6200ea;
//   color: white;
//   border: none;
//   border-radius: 3px;
//   padding: 5px;
//   cursor: pointer;
// }
// .item-actions input {
//   width: 40px;
//   text-align: center;
//   margin: 0 5px;
// }
</style>
