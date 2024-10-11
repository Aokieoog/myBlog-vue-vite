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
        <span style="color: green;">1500</span>
      </div>
      <div>
        <span class="spannav" style="margin: 1.25rem;">预期利润:</span>
        <span style="color: #f75e23;">1520</span>
      </div>
      <div>
        <span class="spannav" style="margin: 1.25rem;">已获利润:</span>
        <span style="color: #f75e23;">360</span>
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
        <el-form style="max-width: 600px" :model="ruleForm" fit-input-width="true" class="demo-ruleForm"
          :size="formSize" status-icon>
          <el-form-item label="时间" prop="date">
            <el-date-picker v-model="ruleForm.open_at" type="date" :size="size" />
          </el-form-item>
          <el-form-item label="名称" prop="name">
            <el-autocomplete style="width: 400px;" v-model="ruleForm.name" :fetch-suggestions="querySearch"
              placeholder="请输入名称" :popper-append-to-body="false" value-key="subalias" fit-input-width
              @change="handleSelect" />
          </el-form-item>
          <el-form-item label="区服" prop="location">
            <el-radio-group v-model="radio1" size="small" @change="radio1change">
              <div>
                <el-radio-button label="请选择区服" value="请选择区服" />
                <el-radio-button label="电信区 双梦" value="电信区 双梦" />
                <el-radio-button label="无界区" value="无界区" />
              </div>
              <div>
                <el-radio-button label="双线区 纵月" value="双线区 纵月" />
                <el-radio-button label="双线区 飞龙" value="双线区 飞龙" />
                <el-radio-button label="双线区 念破" value="双线区 念破" />
                <el-radio-button label="双线区 青梅" value="双线区 青梅" />
              </div>
              <div>
                <el-radio-button label="电信区 长安" value="电信区 长安" />
                <el-radio-button label="电信区 龙虎" value="电信区 龙虎" />
                <el-radio-button label="电信区 碟服" value="电信区 碟服" />
                <el-radio-button label="电信区 煎蛋" value="电信区 煎蛋" />
              </div>
              <div>
                <el-radio-button label="电信区 姨妈" value="电信区 姨妈" />
                <el-radio-button label="电信区 绝代" value="电信区 绝代" />
                <el-radio-button label="电信区 唯满侠" value="电信区 唯满侠" />
                <el-radio-button label="电信区 六合一" value="电信区 六合一" />
              </div>
              <div>

              </div>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="数量" prop="quantity">
            <el-radio-group v-model="radio2" @change="radio2change">
              <div>
                <el-radio-button label="1" value="1" />
                <el-radio-button label="2" value="2" />
                <el-radio-button label="3" value="3" />
                <el-radio-button label="4" value="4" />
                <el-radio-button label="5" value="5" />
                <el-radio-button label="10" value="10" />
              </div>
            </el-radio-group>
            <el-input style="width: 50px;margin-left: 20px;" maxlength="3" v-model="ruleForm.quantity"></el-input>
          </el-form-item>
          <el-form-item label="成本" prop="cost">
            <el-radio-group v-model="radio3" @change="radio3change">
              <div>
                <el-radio-button label="200" value="200" />
                <el-radio-button label="280" value="280" />
                <el-radio-button label="520" value="520" />
                <el-radio-button label="888" value="888" />
                <el-radio-button label="1200" value="1200" />
              </div>
            </el-radio-group>
            <el-input style="width: 55px;margin-left: 20px;" maxlength="4" v-model="ruleForm.cost"></el-input>
          </el-form-item>
          <el-form-item label="备注" prop="desc">
            <el-input v-model="ruleForm.desc"></el-input>
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
        <el-table-column width="200" :show-overflow-tooltip="true" prop="name" label="官方名称" sortable />
        <el-table-column :show-overflow-tooltip="true" prop="created_at" label="入库日期" sortable />
        <el-table-column prop="zone" label="区服" sortable />
        <el-table-column prop="quantity" label="数量" sortable>
          <template #default="scope">
            <span style="color: #409eff;">{{ scope.row.quantity }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="cost" label="成本" sortable>
          <template #default="scope">
            <span style="color: green;">{{ scope.row.cost }}</span>
          </template>
        </el-table-column>
        <!-- <el-table-column prop="zone1price" label="电信价格" sortable />
        <el-table-column prop="zone2price" label="双线价格" sortable /> -->
        <el-table-column prop="wblprice" label="万宝楼在售" sortable />
        <el-table-column prop="wblprice" label="单件利润" sortable>
          <template #default="scope">
            <span :style="{color: scope.row.wblprice-scope.row.cost > 0 ? 'red' : 'green'}">{{ scope.row.wblprice- scope.row.cost }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="wblprice" label="总利润" sortable>
          <template #default="scope">
            <span :style="{color: scope.row.wblprice-scope.row.cost > 0 ? 'red' : 'green'}">{{ (scope.row.wblprice*scope.row.quantity) - (scope.row.cost*scope.row.quantity) }}</span>
          </template>
        </el-table-column>
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
        <el-table-column prop="desc" label="备注" :show-overflow-tooltip="true" />
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
    <el-dialog v-model="dialogVisibleb" :title="csshow?'出售':'编辑'" width="500" center :before-close="handleClose">
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
        <el-form-item v-show="csshow && !bjshow" label="出售单价:">
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
import msg from '@/utils/message.js'
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

const radio1 = ref('请选择区服')
const radio2 = ref('1')
const radio3 = ref('200')
// radio2 = ruleForm.quantity
// const state2 = ref('')
const restaurants = ref([])
const ruleForm = reactive({
  open_at: new Date(),
  name: '',
  cost: '200',
  desc: '',
  zone: '',
  quantity: '1',
})

const csshow = ref(false) // 出售
const bjshow = ref(false) // 编辑

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

// 区服
const radio1change = (val) => {
  ruleForm.zone = val
}
// 数量
const radio2change = (val) => {
  ruleForm.quantity = val
}
// 成本
const radio3change = (val) => {
  ruleForm.cost = val
}

// 新增
async function addkc() {
  const params = ruleForm
  const res = await post('/stock/stockcreate', params)
  if (res) {
    msg.success('添加成功')
    dialogVisiblek.value = false
    await Mystocks()
  }else {
    msg.error('添加失败')
  }
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

:deep(.el-input__inner) {
  color: #409eff;
}
</style>