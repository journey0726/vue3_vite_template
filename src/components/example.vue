<template>
<div ref="example" id="example">example</div>
<div>{{counter}}</div>
</template>

<script setup>
import {ref} from 'vue'
import { useInterval } from '@vueuse/core'

// count will increase every 200ms
const { counter, pause, resume } = useInterval(1000, { controls: true })
</script>

<style>

</style>