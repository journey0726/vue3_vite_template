import { defineStore } from 'pinia';
import store from '../index'


export const useExampleStore = defineStore({
  id: "example",
  state: () => ({
    name: "zhangsan",
    age: 14
  }),
  getters: {
    getExampleName() {
      return this.name
    }
  }
})