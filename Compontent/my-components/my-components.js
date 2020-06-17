// Compontent/my-components/my-components.js
Component({
  properties: {

  },
  data: {

  },
  methods: {

  },
  // 监听页面的生命周期
  pageLifetimes:{
    show(){
      console.log('页面渲染出来了')
    },
    hide(){
      console.log('页面隐藏了')
    },
    resize(){
      console.log('监听页面尺寸改变')
    }
  },
  lifetimes:{
    created(){
      console.log('组件被创建出来了')
    },
    attached(){
      console.log('组件被添加到页面中')
    },
    ready(){
      console.log('组件被渲染出来了')
    },
    moved(){
      console.log('组件被移动到另一个节点')
    },
    detached(){
      console.log('组件被移除')
    }
  },
  options:{
    multipleSlots:true
  }
})
