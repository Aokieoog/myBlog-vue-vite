<template>
  <div>
    <div class="navbar">
      <div>
        <el-select v-model="optionvalue"  style="width: 110px;">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
      <div>
        <span class="spannav" style="margin: 1.25rem;">库存成本:</span>
        <span style="color: red;">Primary</span>
      </div>
      <div>
        <span class="spannav" style="margin: 1.25rem;">预期利润:</span>
        <span style="color: green;">Primary</span>
      </div>
      <div>
        <span class="spannav" style="margin: 1.25rem;">已获利润:</span>
        <span style="color: green;">Primary</span>
      </div>
      <div style="display: flex;align-items: center;">
        <el-button v-show="!loginshow" type="primary" class="active" @click="dialogVisible = true">登录</el-button>
        <el-avatar v-show="loginshow" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        <el-dialog v-model="dialogVisible" title="账号登录" width="500" center>
          <el-form :model="form" label-width="100px" style="max-width: 400px">
            <el-form-item v-show="!data.nameshow" label="用户名:">
              <el-input type="text" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="邮箱:">
              <el-input type="emil" v-model="form.username">
                <template #append>.com</template>
              </el-input>
            </el-form-item>
            <el-form-item label="密码:">
              <el-input type="password" v-model="form.possword" />
            </el-form-item>
          </el-form>
          <div style="display:flex;justify-content:space-around;">
            <a @click="">注册</a>
            <a @click="">忘记密码</a>
          </div>
          <div style="display: flex;justify-content: center;margin-top: 1.25rem;">
            <el-button style="width: 12.5rem;" type="primary" @click="Login">登录</el-button>
          </div>
        </el-dialog>
      </div>
    </div>
    <div v-show="optionvalue==0" class="tablebox">
      <el-table :data="tableDatakcs" :default-sort="{ prop: 'date', order: 'descending' }" style="width: 100%">
        <!-- <el-table-column prop="subalias" label="名称"  /> -->
        <el-table-column prop="name" label="官方名称" sortable />
        <el-table-column prop="zone" label="区服" sortable />
        <el-table-column prop="quantity" label="数量" sortable />
        <el-table-column prop="cost" label="成本" sortable />
        <el-table-column prop="zone1price" label="电信价格" sortable />
        <el-table-column prop="zone2price" label="双线价格" sortable />
        <el-table-column prop="wblprice" label="万宝楼在售" sortable />
        <el-table-column prop="wblprice" label="单件利润" sortable />
        <el-table-column prop="wblprice" label="总利润" sortable />

        <el-table-column prop="desc" label="操作" width="190">
          <template #default="scope">
            <el-button link type="success" @click.prevent="deleteRow(scope.$index)">
              出售
            </el-button>
            <!-- <el-button size="small">出售</el-button> -->
            <el-button link type="primary">编辑</el-button>
            <el-button link type="danger">删除</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="desc" label="备注" />
      </el-table>
    </div>
    <div v-show="optionvalue==1" class="tablebox">
      <el-table :data="tableDatascs" :default-sort="{ prop: 'date', order: 'descending' }" style="width: 100%">
        <!-- <el-table-column prop="subalias" label="名称"  /> -->
        <el-table-column prop="name" label="官方名称" sortable />
        <el-table-column prop="zone" label="区服" sortable />
        <el-table-column prop="quantity" label="数量" sortable />
        <el-table-column prop="cost" label="成本" sortable />
        <el-table-column prop="zone1price" label="当前价格" sortable />
        <el-table-column prop="zone2price" label="出售价格" sortable />
        <el-table-column prop="wblprice" label="利润" sortable />
        <el-table-column prop="wblprice" label="备注"  sortable />
        <el-table-column prop="desc" label="操作" width="150">
          <template #default="scope">
            <el-button link type="success" @click.prevent="deleteRow(scope.$index)">
              出售
            </el-button>
            <el-button link type="primary">编辑</el-button>
            <el-button link type="danger">删除</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="desc" label="备注" />
      </el-table>
    </div>
  </div>
</template>

<script setup>
import { post, get } from '@/utils/http/http';
import { ref, reactive, onMounted } from 'vue';
import cookie from '@/utils/http/cookie.js'
import util from '@/utils/util.js'
import { useJxwg } from "@/pinia/useJx3book/userJxwg.js";
import { storeToRefs } from 'pinia';
const store = useJxwg()
const { tableDatakcs,tableDatascs} = storeToRefs(store);

const dialogVisible = ref(false)
const loginshow = ref(false)
// const tableDatakc = ref([])
// const tableDatasc = ref([])
const data = ref({
  nameshow: true,
  usernameshow: true,
  possword: true
})
const form = reactive({
  name: '',
  username: '853532673@qq',
  possword: '1592248183',
})
const optionvalue = ref('0')
const options = ref([
  { value: '0', label: '库存外观' },
  { value: '1', label: '已售外观' },
])
onMounted(() => {
  Mystocks()
})

async function Login (params) {
  let data = {
    username: form.username + '.com',
    password: form.possword
  }
  let restoken = await post('/user/token', data, {
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    }
  })
  if (restoken.access_token) {
    dialogVisible.value = false
    cookie(restoken.access_token)
  }
  Mystocks()
}
async function Mystocks (params) {
  let resmystocks = await get('/stock/mystocks')
  const tableDatakc=resmystocks.filter(item=>item.sale==0)
  const tableDatasc=resmystocks.filter(item=>item.sale==1)
  store.tableDatakcs = tableDatakc
  store.tableDatascs = tableDatasc
  let token = util.getCookie('access_token')
  if (token) {
    loginshow.value = true
  }
}



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
  border: none;
  padding: 10px 20px;
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}
.spannav{
  font-weight: 600;

}
.tablebox{
  margin-top: 1.25rem;
}
</style>