// Compontent/my-select/my-select.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    count:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    increment(num){
      this.setData({
        count:this.data.count+num
      })
    }
  }
})
