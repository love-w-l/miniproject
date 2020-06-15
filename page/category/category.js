
// 获取全局实例中的数据
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },
  getuserinfo(event){
    // console.log(value)
    // console.log(event)
  },
  /**
   * 生命周期函数--监听页面加载
   */
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