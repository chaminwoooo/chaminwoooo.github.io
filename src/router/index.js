// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Muji from '@/pages/project/Muji.vue';
import FastFive from '@/pages/landing/FastFive.vue';
import Mint from '@/pages/landing/Mint.vue';
import PlayGround from '@/pages/playground/hub.vue';



3
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/project/muji', component: Muji },
    { path: '/landing/fastfive', component: FastFive },
    { path: '/landing/mint', component: Mint },
    { path: '/playground/hub', component: PlayGround },
]



const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
