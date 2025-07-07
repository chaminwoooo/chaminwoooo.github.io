<template>
    <div class="playground-wrapper">
        TODO <br />
        타이머 (ms, D-day) 2개 타입 <br />
        json fetching 연습 <br />
        GSAP 애니메이션 실습 <br />
        모달 케이스 만들기 <br /><br />
        스크립트 활용 <br />
        토스트 케이스 만들기 <br />
        탭 케이스 만들기 <br />
        툴팁 케이스 만들기 <br />
        <!-- https://soyoung-lee.com/ -->
    </div>
</template>


<script setup>
import { onMounted, onUnmounted } from 'vue'

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
        cursor: url("data:image/svg+xml;utf8,\<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'>\<text x='16' y='20' font-size='20' text-anchor='middle' transform='scale(-1,1) translate(-32,0)'>🚀</text>\</svg>") 16 16, auto;
        width: 100vw;
        height: 100vh;
        .rocket-emoji {
            position: absolute;
            font-size: 20px;
            pointer-events: none;
            z-index: 9999;
        }
    }
}
</style>
