// 注册小程序实例
// 一般不在app.js中进行数据请求,一般是在对应的页面进行数据请求
// 在这个页面一般进行设置小程序进入场景对应的设置,还有设置全局数据(在每个页面中都能访问的数据),
App({
  onLaunch:(options)=>{
// 在这里也可以获取对应的进入方法

    //可在此函数内进行网络请求数据
    // console.log('小程序初始化时执行')

    //获取用户的信息 可能在以后的版本中废除,要想获取用户的信息,必须使用按钮当用户点击时获取,在分类页面进行演示
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
  onShow:(options)=>{
    // options获取用户在哪里进的小程序做一个对应的处理
    // console.log(options)
    // switch(options.scene){
    //   case 1001:
    //     break
    //   case 1002: 
    //     break
    // }
  
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
