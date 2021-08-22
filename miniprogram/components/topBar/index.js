// components/topBar/index.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  lifetimes: {
    attached(){
      console.log(app);
      this.setData({
        navHeight:app.globalData.navHeight,
        statusBarHeight:app.globalData.statusBarHeight
      })
      console.log(this.data);
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onClickBackBtn(){
      wx.navigateTo({
        url: '../index/index',
      })
    }
  }
})
