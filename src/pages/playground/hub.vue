<template>
    <div class="playground-hub">
        
        <h2 class="main-title">
            <img src="/playground/img/playground-title.png" alt="PLAYGROUND">
        </h2>
        
        <section class="hub-section">
            <router-link class="glass-box" v-for="(card, i) in cards" :key="i" :to="card.url">
                <div class="glass-filter"></div>
                <div class="glass-overlay"></div>
                <div class="glass-specular"></div>
                <div class="glass-card">
                    <h3>{{ card.title }}</h3>
                    <!-- <p>{{ card.desc }}</p> -->
                </div>
            </router-link>
        </section>
        
        <!--
            TODO  
            타이머 (ms, D-day) 2개 타입 
            json fetching 연습 
            GSAP 애니메이션 실습 
            모달 케이스 만들기 
            스크립트 활용 
            토스트 케이스 만들기 
            탭 케이스 만들기 
            툴팁 케이스 만들기  
        -->
    </div>
</template>


<script setup>
import { onMounted, onUnmounted } from 'vue';
const cards = [
    { title: '메인으로 돌아가기', url: "/"},
    { title: '타이머', url: "/playground/timer"},
    { title: '시계', url: "/playground/watches"},
];

onMounted(() => {
    document.body.classList.add('playground-page');
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024) return;
        if (!document.body.classList.contains('playground-page')) return;

        const flame = document.createElement('div');
        flame.className = 'rocket-emoji';
        flame.textContent = '🔥';
        flame.style.left = `${e.pageX}px`;
        flame.style.top = `${e.pageY}px`;
        document.body.appendChild(flame);
        flame.animate([
            { transform: 'translate(0)', opacity: 1 },
            { transform: 'translate(40px,20px)', opacity: 0 }
        ], {
            duration: 500,
            easing: 'ease-in-out'
        });

        setTimeout(() => flame.remove(), 400);
    })
})
onUnmounted(() => {
    document.body.classList.remove('playground-page');
})


</script>

<style lang="scss">
@media screen and (min-width: 1024px) {
    body.playground-page {
        width: 100vw;
        height: 100vh;
        cursor: url("data:image/svg+xml;utf8,\<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'>\<text x='16' y='22' font-size='22' text-anchor='middle' transform='scale(-1,1) translate(-32,0)'>🚀</text>\</svg>") 16 16, auto;

        .rocket-emoji {
            position: absolute;
            font-size: 20px;
            pointer-events: none;
            z-index: 9999;
        }
        
        a, button {
            cursor: url("data:image/svg+xml;utf8,\<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'>\<text x='16' y='22' font-size='22' text-anchor='middle'>👆</text>\</svg>") 16 16, pointer;
        }
    }
}
</style>

<style lang="scss" scoped>
@use '@/assets/styles/pages/playground';
</style>
