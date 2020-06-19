// page/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'hello world'
  },
  // 跳转到详情页面
  handelgo(){
    wx.navigateTo({
      url: '/page/detail/detail',
    })
  },
  handleredirect(){
    wx.navigateTo({
      url: '/page/comment/comment',
    })
  },
  navigate1(){
    wx.navigateTo({
      url: '/page/detail/detail',
    })
  }
})