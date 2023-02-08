import {ElMessage} from 'element-plus'

const message = (show,data,type) => {
  ElMessage({
    showClose:show,
    message:data,
    type:type
  })
  return ElMessage
}

export default{
  message
}