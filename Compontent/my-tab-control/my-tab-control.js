// Compontent/my-tab-control/my-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Object,
      value:[]
    }
  },
  data: {
    isactive:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tapitem(event){
      this.setData({
        isactive:event.currentTarget.dataset.index
      })
      this.triggerEvent('tapitem',{value:event.currentTarget.dataset.item,index:event.currentTarget.dataset.index})
    }
  }
})
