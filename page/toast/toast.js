// page/toast/toast.js
// 拿到全局中的数据token
const app = getApp()
// app.globalData.token 得到token
Page({
  data: {
    modalhidden:true,
    chooseimage:''
  },
  // 1.加载按钮弹窗
  showtoast(){
    wx:wx.showToast({
      title: '勾选成功',
      // 完成时调用
      complete: (res) => {},
      // 持续时间
      duration: 1000,
      // 失败时调用
      fail: (res) => {},
      //显示图标 默认是'success'成功图标 'loading'等待图标 'none'不显示
      icon: 'success',
      //自己定义的图片
      // image: '/assets/image/成功.svg',
      //是否触摸穿透,当前弹窗未结束时其他按钮是否可以点击
      mask: true,
      // 成功时调用
      success: (res) => {},
    })
  },
  // 2.加载等待弹窗
  showloading(){
    // 等待弹窗必须调用wx:hideLoading函数隐藏弹窗
    wx:wx.showLoading({
      title: '请耐心等待',
      complete: (res) => {},
      fail: (res) => {},
      mask: true,
      success: (res) => {}
    }),
    // 模拟网络请求成功调用hideLoading
    setTimeout(() => {
      ws:wx.hideLoading({
        complete: (res) => {},
        fail: (res) => {},
        success: (res) => {},
      })
    }, 1000);
  },
  // 3.模态对话框
  showModal(){
    wx:wx.showModal({
      // 左边按钮内容及颜色
      cancelColor: 'red',
      cancelText: '取消',
      complete: (res) => {},
      // 右边按钮及颜色
      confirmColor: 'green',
      confirmText: '确定',
      // 对话框内容
      content: 'content',
      fail: (res) => {},
      // 是否显示左边按钮
      showCancel: true,
      success: (result) => {},
      // 对话框标题
      title: '我是一个文本',
    })
  },
  // 5.底部弹窗
  showaction(){
    wx:wx.showActionSheet({
      // 底部弹窗显示列表
      itemList: ['拍照','从图库选一张'],
      complete: (res) => {},
      fail: (res) => {},
      itemColor: 'itemColor',
      success: (result) => {
        var res = result.tapIndex
        if (res==0) {
          wx:wx.chooseImage({
            complete: (res) => {},
            // 可选择图片
            count: 3,
            fail: (res) => {},
            sourceType: ['camera'],
            success: (result) => {
              this.setData({
                chooseimage:result.tempFilePaths
              })
            },
          })
        }else if(res==1) {
          wx:wx.chooseImage({
            complete: (res) => {},
            // 可选择图片
            count: 3,
            fail: (res) => {},
            sourceType: ['album'],
            success: (result) => {
              this.setData({
                chooseimage:result.tempFilePaths
              })
            },
          })
        }
      },
    })
  },
  // 4.自定义模态弹窗
  buttonmodal(){
    this.setData({
      modalhidden:!this.data.modalhidden
    })
  },
  modalconfirm(){
    this.setData({
      modalhidden:true
    })
  },
  modalcancel(){
    this.setData({
      modalhidden:true
    })
  },
  onLoad: function (options) {

  },
  onShareAppMessage: function () {

  },
  // 设置分享弹窗
  onShareAppMessage(){
    return {
      title:'codewhy',
      path:'/page/toast/toast.wxml',
      imageUrl:'/assets/image/u=1119544056,2230935760&fm=26&gp=0.jpg'
    }
  }
})