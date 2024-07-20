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
        <div class="item" v-for="(item,index) in wupindata">
          <el-popover placement="bottom" :width="530" trigger="click">
            <template #reference>
              <div style="display: flex; align-items: center">
                <img class="icon" :src="item.image" alt="Icon" />
                <div class="item-text">{{ item.name }}</div>
              </div>
            </template>
            <div class="item-actions">
              <span class="item-span">单价：</span>
              <el-input v-model="item.jin" maxlength="5" style="width: 60px" />
              <img class="qianimage" src="src/assets/png/jin.png" alt="jin" />
              <el-input v-model="item.yin" maxlength="2" style="width: 50px" />
              <img class="qianimage" src="src/assets/png/yin.png" alt="yin" />
              <el-input v-model="item.tong" maxlength="2" style="width: 50px" />
              <img class="qianimage" src="src/assets/png/tong.png" alt="tong" />
              <span class="item-span" style="margin-left:10px;">数量：</span>
              <el-input v-model="item.ress" maxlength="5" style="width: 82px" />
              <el-button class="itembutton" type="success" @click="adddata(index)" round>添加</el-button>
            </div>
          </el-popover>
        </div>
      </div>
      <div class="containerright">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="时间" width="110" />
          <el-table-column prop="name" label="名称" width="180" />
          <el-table-column prop="dj" label="单价" width="180" />
          <el-table-column prop="ress" label="数量" width="100" />
          <el-table-column prop="djress" label="总价" width="180" />
          <el-table-column fixed="right" label="Operations" width="120">
            <template #default="scope">
              <el-button link type="primary" size="small" @click.prevent="deleteRow(scope.$index)">
                Remove
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
// const datainput = reactive({
//   jin: "",
//   yin: "",
//   tong: "",
//   dj: "",
//   ress: "",
//   djress: "",
// });

const wupindata = reactive([
  {
    name: "绝世上衣·【寒】",
    date: "2024-07-20",
    image: "src/assets/png/598.png",
    jin: "",
    yin: "",
    tong: "",
    dj: "",
    ress: "",
    djress: "",
  }, {
    name: "绝世上衣·【炎】",
    date: "2024-07-12",
    image: "src/assets/png/598.png",
    jin: "",
    yin: "",
    tong: "",
    dj: "",
    ress: "",
    djress: "",
  },
])

const tableData = reactive([
  {
    name: "绝世上衣·【炎】",
    date: "2024-07-12",
    image: "src/assets/png/598.png",
    jin: "1",
    yin: "3",
    tong: "4",
    dj: "5",
    ress: "556",
    djress: "21313",
  },
  {
    name: "绝世上衣·【炎】",
    date: "2024-07-12",
    image: "src/assets/png/598.png",
    jin: "",
    yin: "",
    tong: "",
    dj: "",
    ress: "12333",
    djress: "1133",
  },
]);

function adddata (index) {
  const now = new Date()
  const date = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`
  console.log(wupindata,tableData)
  tableData.push(wupindata[index])
}

const deleteRow = (index) => {
  tableData.splice(index, 1)
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
</style>
