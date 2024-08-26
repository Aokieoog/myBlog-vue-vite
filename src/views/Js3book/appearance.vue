<template>
  <div>
    <div class="navbar">
      <div>
        <span style="margin: 1.25rem;">在库成本:</span>
        <span style="color: red;">Primary</span>
      </div>
      <div>
        <span style="margin: 1.25rem;">预期利润:</span>
        <span style="color: green;">Primary</span>
      </div>
      <div>
        <span style="margin: 1.25rem;">已获利润:</span>
        <span style="color: green;">Primary</span>
      </div>
      <div>
        <el-button class="active" @click="dialogVisible = true">登录</el-button>
        <el-dialog v-model="dialogVisible" title="登录" width="500" center>
            <el-form :model="form" label-width="100px" style="max-width: 400px">
              <el-form-item label="邮箱:">
                <el-input v-model="form.email" />
              </el-form-item>
              <el-form-item label="密码:">
                <el-input v-model="form.possword" />
              </el-form-item>
            </el-form>
        </el-dialog>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const data = reactive({})
const dialogVisible = ref(false)
const form = reactive({
  email: '',
  possword: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})



</script>

<style scoped lang='less'>
.navbar {
  display: flex;
  align-items: center;
  background-color: #FFF;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  justify-content: space-between;
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
</style>