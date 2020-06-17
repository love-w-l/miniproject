// Compontent/my-event/my-event.js
Component({
  methods: {
    increment(){
      this.triggerEvent('increment',{name:'kobe',age:18})
    }
  }
})
