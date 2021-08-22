// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const db = cloud.database();
  let res = ''
  const {nickName,selectCampus,selectGrade,UserGender,userAvatarUrl}=event;
  try{
    await db.collection("User").add({
      data: {
        nickName,selectCampus,selectGrade,UserGender,userAvatarUrl,
        _id:wxContext.OPENID
      },
      
    })
    res = 'SignUp success'
  }
  catch{
    res = 'fail'
  }
  return {
    res
  }
}