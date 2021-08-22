Page({
  data:{
    nickName:'',
    selectCampus:'',
    campus: ['沧海校区','粤海校区'],
    grade:['16级','17级','18级','19级','20级','21级'].reverse(),
    gender: ['男生','女生']
  },
  onClickUserProfile (e) {
    const {userAvatarUrl} = this.data;
    if (!userAvatarUrl) {
      wx.getUserProfile({
        desc: '获取微信头像用于展示',
        success: (res) => {
          this.setData({
            userAvatarUrl: res.userInfo.avatarUrl,
            nickName: res.userInfo.nickName
          });
          
        }
      });
    }

  },
  // 获取用户选择的校区
  onSelectCampus (e) {
    this.setData({
      selectCampus: this.data.campus[e.detail.value]
    });
  },
    onSelectgrade (e) {
    this.setData({
      selectGrade: this.data.grade[e.detail.value]
    });
  },
  //   // 性别选择
    bindPickerChange (e) {
      const {value} = e.detail;
      const Gender = ['male', 'female'];
      this.setData({
        UserGender: Gender[value],
        GenderIndex: value,
        startGender: true
      });
    },
    async SubmitInfo(){
      const {nickName,selectCampus,selectGrade,UserGender,userAvatarUrl} = this.data
      if(nickName&&selectCampus&&selectGrade&&UserGender&&userAvatarUrl){
        wx.showModal({
          title: '提示',
          content: '是否提交注册？',
          success (res) {
            if (res.confirm) {
               wx.cloud.callFunction({
                name:"SignUp",
                data:{
                  nickName,selectCampus,selectGrade,UserGender,userAvatarUrl
                },
                fail: err=>{
                  wx.showToast({
                    title: '注册失败~',
                    icon:'none'
                  })
                },
                complete:res=>{
                  wx.navigateTo({
                    url: '../index/index',
                  })
                }

              })
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
        
        
      }
      else{
        wx.showToast({
          title: '信息填写不完全~',
          icon:'none'
        })
      }
      console.log(res);
    }
})


