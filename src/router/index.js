// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Muji from '@/pages/project/Muji.vue'
import FastFive from '@/pages/landing/FastFive.vue'


3
const routes = [
    { path: '/', component: Home },
    { path: '/project/muji', component: Muji },
    { path: '/about', component: About },
    { path: '/landing/fastfive', component: FastFive }
]



const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
