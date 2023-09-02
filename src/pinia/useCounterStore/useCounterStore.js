import {defineStore} from 'pinia'
export const useCounterSore = defineStore('counter',{
  /* 确保每个组件实例都有自己的状态副本，而不是共享同一个状态对象。我们使用 state: () => ({ count: 0 }) 这种写法来定义状态。这样每个组件实例都会获得一个新的状态对象，而不是共享同一个对象。 */
  state:()=>({
    count:0
  }),
  actions:{
    increment(){
      this.count++
    },
    decrement(){
      this.count--
    }
  }
})