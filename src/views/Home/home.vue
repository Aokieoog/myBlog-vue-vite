<script setup>
import { ref, getCurrentInstance, onMounted } from 'vue';
// 相当于vue2中的this
const { proxy } = getCurrentInstance()
// 定义数据
let mess = ref('')
const chan = ref()
onMounted(()=>{
  console.log(chan.value);
})
//todo
function flushed () {
  // noinspection JSUnresolvedVariable (禁用高亮检查)
  proxy.$http.get('https://www.mxnzp.com/api/daily_word/recommend?count=1&app_id=l8lesimwu6oumkj9&app_secret=cWdQQnp0Nnd6QUpweFJhM2F1L0ZwZz09')
  .then((response)=>{
    mess.value = response.data.data[0].content
  })
}
function enterDisappear () {
  var count = (function() {
    var timer;
    var i = 0;
    function change(tar) {
      i++;
      console.log(i);
      console.log(chan.value.style.opacity);
      chan.value.style.opacity= 1-i/100;
      if (i === tar) {
        clearTimeout(timer);
        return false;
      }
      timer = setTimeout(function() {
        change(tar)
      }, 10)
    }
    return change;
  })()
  count(100)
}

flushed()
/* proxy.$http.get('https://tenapi.cn/v2/yiyan')
.then((response)=>{
  console.log(response);
  mess.value = response.data.data[0].content
}) */


</script>


<template>
  <el-form>
    <h1 ref="chan">{{ mess }}</h1>
    <el-button @click="flushed">刷新</el-button>
    <el-button @click="enterDisappear">进入</el-button>
  </el-form>
</template>


<style scoped>

</style>