import {ElMessage} from 'element-plus'
export default{
  /* 提示 */
  message (data) {
    ElMessage(data)
  },
  /* 成功 */
  success(data) {
    ElMessage({
      message: data,
      type: 'success',
    })
  },
  /* 警告 */
  warning(data){
    ElMessage({
      message: data,
      type: 'warning',
    })
  },
  /* 错误 */
  error(data){
    ElMessage.error(data)
  }
}