// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Muji from '@/pages/project/Muji.vue';
import Airbnb from '@/pages/project/Airbnb.vue';
import FastFive from '@/pages/landing/FastFive.vue';
import Mint from '@/pages/landing/Mint.vue';
import PlayGround from '@/pages/playground/hub.vue';
import Timer from '@/pages/playground/timer.vue';




3
const routes = [
    { path: '/', component: Home },
    { path: '/project/muji', component: Muji },
    { path: '/project/airbnb', component: Airbnb },
    { path: '/landing/fastfive', component: FastFive },
    { path: '/landing/mint', component: Mint },
    { path: '/playground/hub', component: PlayGround },
    { path: '/playground/timer', component: Timer },
]



const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
