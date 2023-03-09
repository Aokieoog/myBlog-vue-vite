import Mock from 'mockjs'
export default {
  /***
   * id: 10以内自增
   * paragraph: 英文段落, cparagraph 中文段落
   * name: 英文名称, cname 中文姓名
   * email: 邮箱
   * ip: ip
   * guid : guid
   * date: 时间
   * image: 图片
   * @returns {*|{valid, XHR, RE, _mocked: {}, Random, toJSONSchema, Handler, setup: (function(*): *), Util, heredoc: *}}
   */
  mockid(){
   return  Mock.mock({
      'list|1-10': [{
        'id|+1': 1 ,
        'name': '@cname',
        'email': '@email',
        'date': '@date',
        'image': Mock.Random.dataImage('200x100'),
        'paragraph': '@cparagraph(10)',
        'guid': '@guid',
        'ip': '@ip',
      }]
    })
  }
}