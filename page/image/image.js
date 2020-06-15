// page/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image:''
  },
  bindtap(){
    wx:wx.chooseImage({
      complete: (res) => {
        this.setData({
          image:res.tempFilePaths[0]
        })
      },
      sourceType:['album','camera']
    })
  },
  bindload(){
    console.log('图片加载完毕')
  }
})