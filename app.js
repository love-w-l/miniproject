App({
  // 全局数据 就可以在组件中拿到这里的数据了
  globalData:{
    token:''
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {

    // 1.先从缓存中取出token 判断token是否有值,如果没值才请求数据,有值检查token是否有效
    const token = wx.getStorageSync('token')
    if (token) {
      // 验证token是否有效
      this.check_token(token)
      console.log(token)
      console.log('token有值')
    }else{
      // token没值再进行登录请求
      console.log('登录成功')
      this.login()
    }
  },
// 登录操作函数
  login(){
    wx.login({
      // code只有5分钟有效期 
      success:(res)=>{
        console.log(res)
        // 1.获取code
        const code = res.code
        // 2.将code发送给服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method:'POST',
          data:{
            code
          },
          success:(res)=>{
            // console.log(res)
            // 将服务器返回的token保存起来
            const token = res.data.token
            this.globalData.token = token
            // console.log(this.globalData.token)
            // 进行本地存储,因为当页面一旦关闭,token消失,用户还要重新登录
            wx.setStorageSync('token', token) //同步保存到本地
          }
        })
      },
    })
  },
  // 验证token是否过期函数
  check_token(token){
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method:'POST',
      header:{
        token
      },
      success:(res)=>{
        // 判断token是否过期,如果过期则重新发送请求
        if (!res.data.errCode) {
          // 证明token不为空,将token赋值给全局token
          this.globalData.token = token
        }else{
          // 如果失效,则重新发送请求
          this.login()
        }
      },
      fail:(res)=>{
        console.log(res)
      }
    })
  },
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
