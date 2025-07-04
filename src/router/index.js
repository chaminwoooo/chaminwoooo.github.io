// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Muji from '@/pages/project/Muji.vue'
import About from '@/pages/About.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/project/muji', component: Muji },
    { path: '/about', component: About }
]



const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
