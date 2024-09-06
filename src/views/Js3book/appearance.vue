<template>
  <div>
    <div class="navbar">
      <div>
        <el-select v-model="optionvalue" style="width: 110px;">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
      <div>
        <span class="spannav" style="margin: 1.25rem;">库存成本:</span>
        <span style="color: red;">1500</span>
      </div>
      <div>
        <span class="spannav" style="margin: 1.25rem;">预期利润:</span>
        <span style="color: green;">1520</span>
      </div>
      <div>
        <span class="spannav" style="margin: 1.25rem;">已获利润:</span>
        <span style="color: green;">360</span>
      </div>
      <!-- <div>
        <el-button>添加外观名称</el-button>
      </div> -->
      <div>
        <el-button color="#8f58fd" @click="dialogVisiblek = true">增加库存</el-button>
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
      <el-dialog v-model="dialogVisiblek" title="新增库存" width="500" center>
        <el-form style="max-width: 600px" :model="ruleForm" fit-input-width="true" class="demo-ruleForm" :size="formSize"
          status-icon>
          <el-form-item label="名称" prop="name">
            <el-autocomplete v-model="ruleForm.name" :fetch-suggestions="querySearch" placeholder="请输入名称" value-key="subalias" popper-class="autoel"
              @select="handleSelect" />
          </el-form-item>
          <el-form-item label="大区" prop="location">
            <el-radio-group v-model="radio1">
              <el-radio-button label="电信区" value="电信区" />
              <el-radio-button label="双线区" value="双线区" />
            </el-radio-group>
          </el-form-item>
          <el-form-item label="数量" prop="location">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="成本" prop="location">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="备注" prop="location">
            <el-input></el-input>
          </el-form-item>
        </el-form>
        <div style="display: flex;justify-content: center;margin-top: 1.25rem;">
          <el-button style="width: 12.5rem;" type="primary" @click="addkc">新增</el-button>
        </div>
      </el-dialog>
    </div>
    <div v-show="optionvalue == 0" class="tablebox">
      <el-table :data="tableDatakcs" :default-sort="{ prop: 'date', order: 'descending' }" style="width: 100%">
        <!-- <el-table-column prop="subalias" label="名称"  /> -->
        <el-table-column prop="name" label="官方名称" sortable />
        <el-table-column prop="zone" label="区服" sortable />
        <el-table-column prop="quantity" label="数量" sortable />
        <el-table-column prop="cost" label="成本" sortable />
        <el-table-column prop="zone1price" label="电信价格" sortable />
        <el-table-column prop="zone2price" label="双线价格" sortable />
        <el-table-column prop="wblprice" label="万宝楼" sortable />
        <el-table-column prop="wblprice" label="单件利润" sortable />
        <el-table-column prop="wblprice" label="总利润" sortable />

        <el-table-column prop="desc" label="操作" width="190">
          <template #default="scope">
            <el-button link type="success" @click="Chushou(scope.row)">
              出售
            </el-button>
            <!-- <el-button size="small">出售</el-button> -->
            <el-button link type="primary" @click="Bianji(scope.row)">编辑</el-button>
            <el-button link type="danger" @click="dialogVisibleb = true">删除</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="desc" min-width="180" label="备注" />
      </el-table>
    </div>
    <div v-show="optionvalue == 1" class="tablebox">
      <el-table :data="tableDatascs" :default-sort="{ prop: 'date', order: 'descending' }" style="width: 100%">
        <!-- <el-table-column prop="subalias" label="名称"  /> -->
        <el-table-column prop="name" label="官方名称" sortable />
        <el-table-column prop="zone" label="区服" sortable />
        <el-table-column prop="quantity" label="数量" sortable />
        <el-table-column prop="cost" label="成本" sortable />
        <el-table-column prop="zone1price" label="当前价格" sortable />
        <el-table-column prop="zone2price" label="出售价格" sortable />
        <el-table-column prop="wblprice" label="利润" sortable />
        <el-table-column prop="wblprice" label="备注" sortable />
        <el-table-column prop="desc" label="操作" width="150">
          <template #default="scope">
            <el-button link type="success" @click="dialogVisibleb = true">
              出售
            </el-button>
            <el-button link type="primary" @click="dialogVisibleb = true">编辑</el-button>
            <el-button link type="danger">删除</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="desc" label="备注" />
      </el-table>
    </div>
    <el-dialog v-model="dialogVisibleb" title="Tips" width="500" center :before-close="handleClose">

      <el-form :model="fromdata" label-width="100px" style="max-width: 400px">
        <el-form-item v-show="bjshow" label="名称:">
          <el-input type="text" v-model="fromdata.name"></el-input>
        </el-form-item>
        <el-form-item v-show="bjshow" label="区服:">
          <el-input type="text" v-model="fromdata.zone">
          </el-input>
        </el-form-item>
        <el-form-item v-show="bjshow" label="数量:">
          <el-input v-model="fromdata.quantity" />
        </el-form-item>
        <el-form-item v-show="bjshow" label="成本:">
          <el-input v-model="fromdata.cost" />
        </el-form-item>
        <el-form-item v-show="csshow && !bjshow" label="售价:">
          <el-input v-model="fromdata.saleprice" />
        </el-form-item>
        <el-form-item v-show="csshow || bjshow" label="备注:">
          <el-input type="textarea" maxlength="30" v-model="fromdata.desc" />
        </el-form-item>
      </el-form>

      <template #footer>
        <div class="dialog-footer">
          <el-button style="width: 12.5rem;" type="primary" @click="QRBianji()">
            确认
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { post, get, patch } from '@/utils/http/http';
import { ref, reactive, onMounted } from 'vue';
import cookie from '@/utils/http/cookie.js'
import util from '@/utils/util.js'
import { useJxwg } from "@/pinia/useJx3book/userJxwg.js";
import { storeToRefs } from 'pinia';
const store = useJxwg()
const { tableDatakcs, tableDatascs } = storeToRefs(store);

const dialogVisible = ref(false)
const dialogVisibleb = ref(false)
const dialogVisiblek = ref(false)

const radio1 = ref('电信区')
// const state2 = ref('')
const restaurants = ref([])
const ruleForm = reactive({
  name: '',
})

const csshow = ref(false)
const bjshow = ref(false)

const loginshow = ref(false)
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
const fromdata = reactive({
  cost: '', // 成本
  desc: '', // 备注
  id: '',
  name: '', // 名称
  quantity: '', // 数量
  sale: '', // 售出1
  saleprice: '', // 销售价格
  zone: '', // 区服
})
const paradata = ref({})


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
  const tableDatakc = resmystocks.filter(item => item.sale == 0)
  const tableDatasc = resmystocks.filter(item => item.sale == 1)
  store.tableDatakcs = tableDatakc
  store.tableDatascs = tableDatasc
  let token = util.getCookie('access_token')
  if (token) {
    loginshow.value = true
  }
}
async function QRBianji (params) {
  let res = await ('/stock/stockupdate', fromdata)
  console.log(res);

}
// 出售
function Chushou (params) {
  dialogVisibleb.value = true
  csshow.value = true
  paradata.value = params
  console.log(paradata.value);
  // fromdata.saleprice = params.saleprice
}
// 编辑
function Bianji (params) {
  dialogVisibleb.value = true
  bjshow.value = true
  paradata.value = params
  console.log(paradata.value);

}
// 遮罩销毁
function handleClose (done) {
  dialogVisibleb.value = false
  csshow.value = false
  bjshow.value = false
}

// 查询名称
let timeout
const querySearch = (queryString, cb) => {
  const results = queryString
    ? restaurants.value.filter(createFilter(queryString))
    : restaurants.value
  console.log(results);
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    cb(results)
  }, 1500 * Math.random())
}
const createFilter = (queryString) => {

  return (restaurant) => {
    // console.log(queryString,restaurant.subalias);
    // const restaurantName = restaurant?.value || '';
    return restaurant.subalias.toLowerCase().indexOf(queryString.toLowerCase()) !== -1

  }
}
const loadAll = async () => {
  try {
    let data = {
      name: ruleForm.name // 确保 ruleForm 是定义的
    }
    let loaddata = await get('/fashion/fashionname', data) // 异步获取数据
    // console.log('loaddata', loaddata)
    return loaddata // 假设 loaddata 是一个数组
  } catch (error) {
    console.error('Error loading data:', error)
    return [] // 如果出错，返回空数组
  }
}

const handleSelect = (item) => {
  console.log(item)
}

onMounted(async () => {
  await Mystocks() // 确保 Mystocks 是定义的
  restaurants.value = await loadAll() // 确保 loadAll 是异步的
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
  border: none;
  padding: 10px 20px;
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.spannav {
  font-weight: 600;

}

.tablebox {
  margin-top: 1.25rem;
}
.autoel{
  width: 20.5rem;
}
</style>