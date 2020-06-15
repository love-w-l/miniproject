// page/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:''
  },
  bindinput(event){
    // console.log(event)
    this.setData({
      message:event.detail.value
    })
  },
  bindfocus(event){
    console.log('获取光标')
  },
  bindblur(){
    console.log('失去光标')
  }
})