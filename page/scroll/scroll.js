// page/scroll/scroll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  scrollTop(){
    this.setAction({
      scrollTop:30
    })
  },
  bindrefresherpulling(){
    console.log('11')
  },
  bindscroll(value){
    console.log(value)
  }
})