// page/home.js
Page({

  data: {
    titles:['衣服','裤子','鞋子']
  },
  btnclick(){
    console.log('按钮被点击了')
  },
  catchclick(){
    console.log('阻止事件冒泡按钮被点击了')
  },
  handletouchstart(){
    console.log('手指开始触摸')
  },
  handletouchend(){
    console.log('手指离开屏幕')
  },
  handletouchmove(){
    console.log('手指在屏幕上移动')
  },
  handlelongpress(){
    console.log('手指长按屏幕')
  },
  handleclick(event){
    console.log(event , '------')
  },
  handleend(event){
    console.log(event , '+++++')
  },
  titleclick(event){
    console.log(event)
    console.log(event.target.dataset.index)
    console.log(event.target.dataset.item)
  },
  outercapture(){
    console.log('taptureouter')
  },
  centercapture(){
    console.log('tapturecenter')
  },
  innercapture(){
    console.log('taptureinner')
  },
  outertap(){
    console.log('outertap')
  },
  centertap(){
    console.log('centertap')
  },
  innertap(){
    console.log('innertap')
  }
})