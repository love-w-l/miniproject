Page({
  data:({
    message:'数据动态显示',
    star:[
      {name:'kobe',age:20},
      {name:'why',age:18},
      {name:'codewhy',age:30},
      {name:'rubl',age:35}
    ],
    count:0
  }),
  addclick(){
    // 类似vue写法并不会在页面上实时更新数据,但是在内部确实改变了数据
    // this.data.count +=1
    // console.log(this.data.count)
    this.setData({
      count:this.data.count+=1
    })
  },
  subclick(){
    this.setData({
      count:this.data.count-=1
    })
  }
})