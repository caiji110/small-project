// miniprogram/pages/index/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: { 
    currentIndex:0,
    show:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    // let res=await wx.cloud.callFunction({
    //   name:"SendMessage",
    // })
    // console.log(res);
  },
  onClickPagesBtn(e){
    let index = e.target.dataset.index
 
   if(index==1){
     this.setData({
       show:!this.data.show
     })
     if(this.data.currentIndex==1){
        index=0
     }
   }
   else{
     this.setData({
       show:false
     })
   }
   //console.log(index);
   this.setData({
    currentIndex: index
  })
  },
  onClickGetPubilshBtn(){
    wx.navigateTo({
      url: '../createGet/index',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})