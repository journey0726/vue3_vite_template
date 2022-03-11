import {createRouter, createWebHistory} from 'vue-router'
const routerFile = import.meta.globEager('./*.js')

import Layout from '@/Layout/layout.vue'

const routeModule = []
Object.keys(routerFile).forEach(key => {
    if (key !== './index.js') {
        routeModule.push(routerFile[key].default)
    }
})
const routes = [
    {
        path: '/',
        component: Layout,
        name: 'Layout'
    },
    ...routeModule
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router