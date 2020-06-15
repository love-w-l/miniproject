App({
  onLaunch:()=>{
    //可在此函数内进行网络请求数据
    // console.log('小程序初始化时执行')

    //获取用户的信息
    // wx.getUserInfo({
    //   complete: (res) => {
    //     console.log(res)
    //   },
    // })

    // 模拟错误 查看onError效果
    // setTimeout(() => {
    //   const err = new Error()
    //   throw err
    // }, 3000);
  },
  onShow:()=>{
    // 在页面显示出来时调用的函数
    // console.log('页面显示出来了')
  },
  onHide:()=>{
    // 页面关闭时调用 可以点击右上角小圆点进行页面关闭 小程序关闭时间未超过两小时再打开会显示关闭状态时的页面
    // console.log('页面关闭了')
  },
  onError(){
    // 数据请求失败时调用
    // console.log('数据请求失败')
  }
})
