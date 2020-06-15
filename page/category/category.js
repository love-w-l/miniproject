
// 获取全局实例中的数据
const app = getApp()
console.log(app.globalData.name)
Page({
  /**
   * 页面的初始数据
   */
  data: {
    message:app.globalData.name,
    list:[]
  },
  getuserinfo(event){
    // console.log(value)
    // console.log(event)
  },
  click(){
    console.log('codewhy')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://152.136.185.210:8000/api/n3/home/data?type=pop&page=1',
      success:(res)=>{
        this.setData({
          list:res.data.data.list
        })
      }
    })
  },
  // 监听页面的滚动
  onPageScroll(options){
    // console.log(options)
  },
   /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('滚动到底部了')
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('下拉刷新')
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})