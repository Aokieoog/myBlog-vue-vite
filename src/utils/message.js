import { ElMessage } from 'element-plus'
export default {
  /* 基础消息显示函数 */
  showMessage (type, data) {
    ElMessage({
      type: type,
      message: data,
      offset:70,
      grouping:true,
      zIndex:99999
    });
  },
  /* 提示 */
  message (data) {
    this.showMessage('info', data);
  },
  /* 成功 */
  success (data) {
    this.showMessage('success', data);
  },
  /* 警告 */
  warning (data) {
    this.showMessage('warning', data);
  },
  /* 错误 */
  error (data) {
    this.showMessage('error', data);
  }
};