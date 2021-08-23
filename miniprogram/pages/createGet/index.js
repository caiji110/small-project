// miniprogram/pages/createGet/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tagIndex:[],
    originalWhatsup:'请简单的介绍下自己吧（选填）~',
    tagList: [{ title: '一起去学习', color: '#979797' }, { title: '一起去玩耍', color: '#979797' }],
    cardInfo:{
      tagInfo:[],
      cardContent:'',
      getTimes:1,
      getDate:1,
      owner: {
        whatsUp:'',
        campus:'',
        nickName:'',
        gender:'',
        avatarUrl:''
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  // 完成卡片
  onFinishCardBtn: function (e) {
    const {value} = e.target.dataset;
    if (value == 'publish') {
      if (this.data.cardInfo.cardContent) {
        wx.showModal({
          title: '提示',
          content: '是否确定发布卡片？',
          success: async (res) => {
            if (res.confirm) {
              // 拿到用户填写的信息
              let {cardInfo} = this.data;
              let duration = cardInfo.getDate;
              duration = duration * 24 * 3600 * 1000;
              let cardDetail = {
                availableCount: cardInfo.getTimes,
                content: cardInfo.cardContent,
                duration,
                tags: cardInfo.tagInfo,
                owner:cardInfo.owner
              };
              // 拿到用户自己的信息和填写的信息用于渲染页面
              let nowWhatsUp = this.data.cardInfo.lzDesInfo.Content;
              let preWhatsUp = this.data.originalWhatsup;
              let newCard = {
                available: true,
                content: cardInfo.cardContent,
                subGetwaysCount: 0,
                createTime: '刚刚',
                owner: {avatarUrl, nickName, campus, gender},
                tags: cardInfo.tagInfo,
                myCard: true,
                owner: {
                  whatsUp: nowWhatsUp ? nowWhatsUp : preWhatsUp
                }
              };
              // if (nowWhatsUp && nowWhatsUp != preWhatsUp) {
              //   api.updateUser({ input: { whatsUp: nowWhatsUp } });
              // }
              // 往数据库添加新的卡片
              // api.createMainGetway({ input: cardDetail });
              // // 渲染数组多加一个数据
              // this.data.$.GlobalState.GetCardList.unshift(newCard);
              // console.log(this.data.$.GlobalState.GetCardList);
            } else if (res.cancel) {
              console.log('用户点击取消');
            }
          }
        });

      } else {
        wx.showToast({
          title: '卡片内容不能为空~',
          icon: 'none',
          duration: 2000
        });

      }
    } 

  },
    // 获取选中的标签
    onSelectTagBtn (e) {

      const {index} = e.target.dataset;
      const {tagList, tagIndex, cardInfo} = this.data;
      tagList[index].color = tagList[index].color == '#787cf9' ? '#979797' : '#787cf9';
      let nums = cardInfo.tagInfo.indexOf(tagList[index].title);
      if (nums == -1) {cardInfo.tagInfo.push(tagList[index].title);} else {cardInfo.tagInfo.splice(nums);}
      this.setData({
        tagList: [].concat(tagList),
        'cardInfo.tagInfo': [].concat(cardInfo.tagInfo)
      });
    },
    // 获取帖子内容
  onbindblur (e) {
    this.setData({
      'cardInfo.owner.whatsUp': e.detail.value.slice(0, 100)
    });
  },
    // 改变get的次数
    onChangeTimes (e) {
      const {type} = e.target.dataset;
      let {getTimes, getDate} = this.data.cardInfo;
      if (type == 'add') {
        this.setData({
          'cardInfo.getTimes': getTimes + 1
        });
      } else {
        this.setData({
          'cardInfo.getTimes': getTimes - 1 > 1 ? getTimes - 1 : 1
        });
      }
    },
    // 改变Date的天数
    onChangeDate (e) {
      const {type} = e.target.dataset;
      let {getTimes, getDate} = this.data.cardInfo;
  
      if (type == 'add') {
        this.setData({
          'cardInfo.getDate': getDate + 1
        });
      } else {
        this.setData({
          'cardInfo.getDate': getDate - 1 > 1 ? getDate - 1 : 1
        });
      }
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