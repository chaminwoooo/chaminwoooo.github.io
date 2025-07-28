// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Muji from '@/pages/project/Muji.vue';
import Airbnb from '@/pages/project/Airbnb.vue';
import FastFive from '@/pages/landing/FastFive.vue';
import Mint from '@/pages/landing/Mint.vue';
import PlayGround from '@/pages/playground/Hub.vue';
import Timer from '@/pages/playground/Timer.vue';
import Watches from '@/pages/playground/Watches.vue'
import DayNight from '@/pages/playground/DayNight.vue'



const routes = [
    { path: '/', component: Home },
    { path: '/project/muji', component: Muji },
    { path: '/project/airbnb', component: Airbnb },
    { path: '/landing/fastfive', component: FastFive },
    { path: '/landing/mint', component: Mint },
    { path: '/playground/hub', component: PlayGround },
    { path: '/playground/timer', component: Timer },
    { path: '/playground/watches', component: Watches },
    { path: '/playground/DayNight', component: DayNight },
]



const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
