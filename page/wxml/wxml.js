Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:'hello world',
    firstname:'kobe',
    lastname:'bryant',
    age:20,
    nowtime: '',
    isActive:false,
    score:40,
    isshow:true,
    movies:[
      {name:'红楼梦'},
      {name:'三国演义'},
      {name:'西游记'}
    ]
  },
  bindtap(){
    this.setData({
      isActive : !this.data.isActive
    })
  },
  incrment(){
    if (this.data.score>=0 && this.data.score<100) {
    this.setData({
        score:this.data.score + 10
    })
   }
  },
  onLoad: function () {
    setInterval(() => {
      this.setData({
        nowtime:new Date().toLocaleString()
      })
    }, 1000);
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