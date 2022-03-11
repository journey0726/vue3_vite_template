
<template>
  <div class="example" @click="get">123</div>
  <el-button type='primary'>点我</el-button>
    <Edit class="is-loading"></Edit>
    <img src='@/assets/logo.png' />
  <router-view></router-view>
</template>
<script setup>
import env from '@/env'
// import { useExampleStore } from './store/modules/example'
import {useRouter} from 'vue-router'
const router = useRouter()
let get = () => {
  // router.push({name: 'example'})
  return getData()
}
const getData = async () => {
  return await fetch('/api').then(res => res.text()).then(res => console.log(res))
}
</script>

<style lang="less">
.example {
  color: red;
}
</style>
