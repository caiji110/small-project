Component({
  externalClasses: ['class', 'hover-class'],
  options: {
    styleIsolation: 'apply-shared',
  },
  properties: {
    leftIcon: String,
    rightIcon: String,
    title: String,
  },
  data: {},
  methods: {
    onClickshowStatusBtn() {
      wx.showModal({
        title: '立刻有',
        content: '可GET状态下,别人可以通过你发布的卡片获取到你的微信',
        showCancel: false,
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定');
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        }
      });

    },
    onClickSignUpBtn(e) {
        console.log(213213);
      wx.navigateTo({
        url: '../login/index',
        fail: err=>console.log(err)
      });
    },
  }
})



// const app = getApp();
// import api from '../../../api/api';
// const {throttle} = require('../../../tools/throttle');
// app.create.Component(app.Store, {
//   use: [
//     'UserStore',
//     'TabBarStore'
//   ],
//   data: {
//     UserName: 'likeyou',
//     UserAvatar: '',
//     compressImg: '',
//     isactive: true
//   },
//   lifetimes: {
//     async ready () {
//       // console.log(this.data.UserStore);
//       app.emitter.once('onFristLoadMePage', this.firstLoad, this);
//       app.emitter.on('onUpdateUser', this.setUserInfo, this);
//     }},
//   methods: {
//     firstLoad () {
//       this.setUserInfo();
//     },
//     setUserInfo () {
//       console.log(1111);
//       console.log(app.Store.data.UserStore);
//       this.setData({
//         UserName: app.Store.data.UserStore.nickName,
//         compressImg: app.Store.data.UserStore.compressImg
//       });
//     },
//     onClickTurnToAdminPage (e) {
//       wx.navigateTo({
//         url: '../../pages/AdminPage/index'
//       });
//     },
//     onClickContectUsBtn (e) {

//       wx.navigateTo({
//         url: '../../pages/ContectAdmin/index'
//       });
//     },
//     onClickUpdateInfo () {
//       wx.navigateTo({
//         url: '../../pages/wechat/index'
//       });
//     },
//     onClickContectUsBtn (e) {
//       wx.navigateTo({
//         url: '../../pages/ContectAdmin/index'
//       });
//     },
//     onClickTurnToMyGroup (e) {
//       if (!this.data.UserName) {
//         wx.showModal({
//           title: '提示',
//           content: '你还未登录注册~',
//           success: (res) => {
//             if (res.confirm) {
//               this.onClickSignUpBtn();
//             } else if (res.cancel) {
//               console.log('用户点击取消');
//             }
//           }
//         });
//       } else {
//         wx.navigateTo({
//           url: '../../pages/MyGroup/index'
//         });
//       }
//     },

//     onChangeAvatar () {
//       wx.chooseImage({
//         count: 1,
//         sizeType: ['original', 'compressed'],
//         sourceType: ['album', 'camera'],
//         success: (res) => {
//           // tempFilePath可以作为img标签的src属性显示图片
//           const tempFilePaths = res.tempFilePaths;
//           wx.cloud.uploadFile({
//             cloudPath: `userAvatar/${this.data.$.UserStore._id}/original`,
//             filePath: tempFilePaths[0], // 文件路径
//             success: async (imgRes) => {
//               // get resource ID
//               let imgIDRes = await api.saveAvatarImg(imgRes.fileID);
//               let obj = imgIDRes.result.resultobj.data;
//               this.setData({
//                 UserAvatar: obj.originalImg,
//                 compressImg: obj.compressImg
//               });
//             },
//             fail: (err) => {
//               // handle error
//               console.log(err);
//             }
//           });
//         }
//       });
//     },

//     async onChangeStatusBtn (e) {
//       const value = e.target.dataset.value;
//       let res = '';
//       if (value == 'true')  {res = true;} else {res = false;}

//       if (this.data.$.UserStore.canBeGet == res) {return;}
//       this.data.$.UserStore.canBeGet = res;
//       const { updateUser: result } = await api.updateUser({ input: { canBeGet: res } });
//     }
//   }
// });