// Compontent/my-props/my-props.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:String,
      value:'我是默认标题',
      observer(newvalue,oldvalue){
        // console.log(newvalue,oldvalue)
      }
    }
  },
  externalClasses:["titleclass"],
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
