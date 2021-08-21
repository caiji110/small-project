// app.js
App({
  globalData: {
    userInfo: null,
    navHeight:'',
    showHeight:"",
    marginTop:""
  },
  onLaunch() {
    let navHeight=''
    let cachet = wx.getMenuButtonBoundingClientRect();
    let {height,top}  = cachet;
    wx.getSystemInfo({
      success:res=> {
        console.log(res);
        navHeight= (top-res.statusBarHeight)*2+height;
        this.globalData.navHeight=navHeight;
        this.globalData.statusBarHeight =res.statusBarHeight;
        this.globalData.marginTop=navHeight+res.statusBarHeight;
        this.globalData.showHeight=res.screenHeight-navHeight-res.statusBarHeight;
       console.log(this.globalData.showHeight);
      }
    });
   

    console.log(cachet);
  },
  
})
