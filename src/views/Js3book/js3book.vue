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
        <div class="item" v-for="(item, index) in wupindata">
          <el-popover placement="bottom" :width="530" trigger="click">
            <div class="item-actions">
              <span class="item-span">单价：</span>
              <el-input v-model="item.jin" @keyup="item.jin = item.jin.replace(/[\D\s]/g, '')" maxlength="5"
                autofocus="true" style="width: 60px;color: #f75e02;" />
              <img class="qianimage" src="@/assets/png/jin.png" alt="jin" />
              <el-input v-model="item.yin" @keyup="item.yin = item.yin.replace(/[\D\s]/g, '')" maxlength="2"
                style="width: 50px" />
              <img class="qianimage" src="@/assets/png/yin.png" alt="yin" />
              <el-input v-model="item.tong" @keyup="item.tong = item.tong.replace(/[\D\s]/g, '')" maxlength="2"
                style="width: 50px" />
              <img class="qianimage" src="@/assets/png/tong.png" alt="tong" />
              <span class="item-span" style="margin-left:10px;">数量：</span>
              <el-input class="shulianginput" v-model="item.ress" @keyup="item.ress = item.ress.replace(/[\D\s]/g, '')"
                maxlength="5" style="width: 82px" />
              <el-button class="itembutton" type="success" @click="adddata(index)" round>添加</el-button>
            </div>
            <template #reference>
              <div style="display: flex; align-items: center">
                <img class="icon" :src="item.image" alt="Icon" />
                <div class="item-text">{{ item.name }}</div>
              </div>
            </template>
          </el-popover>
        </div>
      </div>
      <div class="containerright">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="时间" width="110" />
          <el-table-column prop="name" label="名称" width="180">
            <template #default="scope">
              <span style="color: rgb(119 2 247);">{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="dj" label="单价" width="180">
            <template #default="scope">
              <span style="color: #f75e02;">{{ scope.row.dj }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="ress" label="数量" width="100">
            <template #default="scope">
              <span style="color: rgb(123 141 64);">{{ scope.row.ress }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="djress" label="总价" width="180">
            <template #default="scope">
              <span style="color: #f75e02;">{{ scope.row.djress }}</span>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="状态" width="120">
            <template #default="scope">
              <el-button link type="primary" size="small" @click.prevent="deleteRow(scope.$index)">
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script setup>
import msg from '@/utils/message.js'
import { ref, reactive } from "vue";
import { storeToRefs } from 'pinia';
import { useJx3book } from "@/pinia/useJx3book/useJx3book";
const Jx3Store = useJx3book()
const { tableData } = storeToRefs(Jx3Store);

const wupindata = reactive([
  {
    name: "绝世上衣·【寒】",
    image: "src/assets/png/598.png",
    date: "",
    jin: "",
    yin: "",
    tong: "",
    dj: "",
    ress: "",
    djress: "",
  }, {
    name: "绝世上衣·【炎】",
    image: "src/assets/png/598.png",
    date: "",
    jin: "",
    yin: "",
    tong: "",
    dj: "",
    ress: "",
    djress: "",
  },
])

function adddata (index) {
  let data = wupindata[index]
  console.log(data);
  if ((data.jin || data.yin || data.tong) && data.ress) {
    const now = new Date()
    data.date = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`
    let he = data.jin + zeroPad(data.yin) + zeroPad(data.tong)
    data.dj = numPad(he)
    data.djress = numPad(data.ress * he)
    const clonedItem = JSON.parse(JSON.stringify(data));
    Jx3Store.tableData.push(clonedItem);
    localStorage.setItem('jx3', JSON.stringify(Jx3Store.tableData))
  } else {
    msg.error('请填写单价和数量')
  }

}

// 定义一个函数，用于将数字转换为砖、金、银、铜的表示
function numPad (amount) {
  const units = ['砖', '金', '银', '铜'];
  const dividers = [100000000, 10000, 100, 1]; // 对应砖、金、银、铜的分隔线

  let result = [];
  for (let i = 0; i < dividers.length; i++) {
    const unitValue = Math.floor(amount / dividers[i]);
    if (unitValue > 0) {
      result.push(`${unitValue}${units[i]}`);
    }
    amount %= dividers[i];
  }
  return result.join('');
}

const zeroPad = (num) => {
  let s = num + "";
  while (s.length < 2) {
    s = "0" + s;
  }
  return s;
}

const deleteRow = (index) => {
  Jx3Store.tableData.splice(index, 1)
  localStorage.setItem('jx3', JSON.stringify(Jx3Store.tableData))
}
</script>

<style scoped lang="less">
.itembutton {
  margin-left: 10px;
}

.qianimage {
  width: 25px;
  height: 18px;
  margin: 0 3px;
}

.container-wrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 1.25rem;
}

.containerright {
  background-color: #f8f8f8;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
  background-color: #4caf50;
  /* Green color for the active button */
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

.navbar input[type="text"]+button {
  background: none;
  border: none;
  padding: 0;
  margin: 0 0 0 5px;
  cursor: pointer;
}

.navbar input[type="text"]+button:before {
  content: "🔍";
  font-size: 18px;
}

.container {
  width: 20rem;
  height: 100%;
  padding: 0 1.25rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.item {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #e0e0e0;
  padding: 10px 0;
}

.item .icon {
  width: 32px;
  height: 32px;
  margin-right: 10px;
}

.item-text {
  flex: 1;
}

.item-span {
  font-size: 14px;
  font-weight: bold;
}

.item-actions {
  display: flex;
  align-items: center;
  justify-content: space-evenly
}

:deep(.el-input__inner) {
  color: #f75e02;
}

:deep(.shulianginput .el-input__inner) {
  color: #7c1df1;
}
</style>
