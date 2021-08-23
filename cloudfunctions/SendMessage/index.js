// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(21312);
  const wxContext = cloud.getWXContext()
  try {
    const result = await cloud.openapi.subscribeMessage.send({
        "touser":wxContext.OPENID,
        "page":'index',
        "lang": 'zh_CN',
        "data": {
          "thing11": {
            "value": '339208499'
          },
          "name8": {
            "value": '赖奕新'
          }
        },
        "templateId": '0CixxkL91nvbxCnyThdo33b5rp1xluk2qMYbl2mYwo0',
        "miniprogramState": 'developer'
      })
    return result
  } catch (err) {
    return err
  }
}