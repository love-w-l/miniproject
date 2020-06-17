// page/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:0,
    titles:['精选','流行','热门'],
    isshow:true
  },
  increment(event){
    this.setData({
      count:this.data.count+1
    })
    console.log(event.detail.name,event.detail.age)
  },
  tapitem(event){
    // console.log(event.detail.value,event.detail.index)
  },
  itemclick(){
    // 获取子组件 
     const children = this.selectComponent('#container')
    //1.直接修改子组件的数据不推荐这样修改
    // children.setData({
    //   count:children.data.count+10
    // })
    //2,通过调用自组件的方法进行修改数据
    children.increment(12)
  },
  isshow(){
    this.setData({
      isshow:!this.data.isshow
    })
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