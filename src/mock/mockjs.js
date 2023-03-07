import Mock from 'mockjs'

export default {
  /***
   * 随机10个以内id
   */
  mockid(){
   return  Mock.mock({
      'list|1-10': [{
        'id|+1': 1
      }]
    })
  }
}