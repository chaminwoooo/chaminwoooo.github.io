// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Muji from '@/pages/muji/Muji.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/muji', component: Muji }
]



const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
