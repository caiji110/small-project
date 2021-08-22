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
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   不填不能直接调用 wx.cloud.callContainer
        env: 'cloud1-5gqp7vjo23b55255',
        traceUser: true
      });
    }

    console.log(cachet);
  },
  
})
