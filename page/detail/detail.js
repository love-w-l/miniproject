// page/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 跳转时传递数据在链接后面直接拼串进行传递,可在这里拿到数据
  onLoad: function (options) {
    console.log(options.name,options.age)
  },
  // 想要把数据传递出去,可在onUnload中传递数据
  onUnload:function(){
    // 1.获取首页的页面 getCurrentPages获取当前活跃的页面
    // console.log(getCurrentPages())
    const page = getCurrentPages()
    // 2.获取首页页面
    const home = page[page.length-2]
    // 3,修改首页页面数据
    home.setData({
      title:'hello codewhy'
    })
  },
  handelback(){
    wx.navigateBack({
      
    })
  }
})