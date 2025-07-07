<!-- src/pages/Home.vue -->
<template>
    <div class="home-layout">
        <header class="home-header">
            <span class="icon">🌞👋</span>
            <h1 class="home-title">
                Ciao, mondo! <br>
                Buongiorno, sono CHA MINWOO.
            </h1>
        </header>

        <main class="main">
            <section class="hub-wrapper">
                <div class="grid-box">
                    <router-link v-for="(card, i) in cards" :key="i" class="bento-card"
                        :style="{ backgroundColor: card.bg }" :to="card.url">
                        <h3>{{ card.title }}</h3>
                        <p>{{ card.desc }}</p>
                    </router-link>
                </div>
            </section>

        </main>

        <footer class="footer">
            <span class="footer-txt">&copy; {{ new Date().getFullYear() }} CHA MINWOO. All rights reserved.</span>
        </footer>

        <div class="bg-blobs">
            <div class="blob blob1"></div>
            <div class="blob blob2"></div>
            <div class="blob blob3"></div>
            <div class="blob blob4"></div>
            <div class="blob blob5"></div>
            <div class="blob blob6"></div>
            <div class="blob blob7"></div>
            <div class="blob blob8"></div>
            <div class="blob blob9"></div>
            <div class="blob blob10"></div>
        </div>



    </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue';
import gsap from 'gsap';
const cards = [
    { title: '👤 About Me', desc: '안녕하세요 차민우 입니다', bg: '#d0e8ff', url: "/about" },
    { title: '🧺 MUJI', desc: '반응형 메인페이지 with Vue', bg: '#f2e8dc', url: "/project/muji" },
    { title: '🏢 FastFive', desc: '투어신청 페이지 with GSAP', bg: '#e3f5e6', url: "/landing/fastfive" },
    { title: '🔠 민트영어 ', desc: '이벤트 페이지 with GSAP', bg: '#c9f2d2', url: "/landing/mint" },
    { title: '🚀 PLAYGROND', desc: '실험용 프로젝트', bg: '#fef6c9', url: "/playground/hub" },

    // 이름	HEX 값	느낌
    //     파스텔 민트	#c9f2d2	생기 있는 부드러운 민트
    //     소프트 핑크	#ffdce0	부드럽고 따뜻한 느낌
    //     베이비 블루	#d0e8ff	청량하고 안정감 있는 색
    //     라이트 옐로우	#fff4cc	가볍고 밝은 느낌
    //     라벤더 퍼플	#e3dfff	몽환적이고 포근한 색감
    //     민트 블루	#d7f0f6	아이스 블루톤의 청결한 색
    //     코튼 살몬	#ffe9d6	부드러운 복숭아톤
    //     버터 옐로우	#fef6c9	파스텔 노랑, 안정적임
    //     라이트 코랄	#ffdad5	따뜻하고 친근한 색
    //     세이지 민트	#e3f5e6	자연계열, 편안한 톤
    //     애쉬 블루	#dfeefb	고급스러운 쿨톤
    //     모카 베이지	#f2e8dc	은은한 뉴트럴 베이지
    // 

];

onMounted(async () => {
    await nextTick();
    gsap.set('.bento-card', { opacity: 1 }); // 초기값 강제 설정
    gsap.set('.bento-card', { y: 0 }); // 초기값 강제 설정
    gsap.from('.bento-card', {
        opacity: 0,
        y: 40,
        delay: 0.2,
        stagger: 0.2,
        duration: 0.2,
        ease: 'power3.out'
    });
});
</script>

<style scoped lang="scss">
@use '@/assets/styles/mixins' as *;

.home-layout {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: linear-gradient(180deg, #cfd8dc, #eceff1);
    padding-top: constant(safe-area-inset-top);
    padding-bottom: constant(safe-area-inset-bottom);
    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);
}

.home-header {
    position: relative;
    padding: 2.4rem;
    z-index: 2;

    .icon {
        font-size: 3.2rem;
    }
}

.home-title {
    @include font-32(700);
    font-style: italic;
    background: linear-gradient(90deg, #78909c, #cfd8dc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.main {
    position: relative;
    flex: 1;
    padding: 2rem;
    z-index: 1;
}

.hub-wrapper {

    .grid-box {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
        gap: 1.6rem;
    }

    .bento-card {
        position: relative;
        padding: 2rem;
        border-radius: 1.6rem;
        transition: all 0.2s ease;
        @include shadow2;
        cursor: pointer;

        h3 {
            @include font-18(700);
            margin-bottom: 0.8rem;
            color: #1e1e2f;
        }

        p {
            @include font-14;
            color: #343a40;
        }

        &:hover {
            top: -5px;
            filter: brightness(1.05);
        }
    }
}

.footer {
    position: relative;
    width: 100%;
    height: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    background: linear-gradient(180deg, #b0bec5, #cfd8dc);
    z-index: 2;

    .footer-txt {
        @include font-16;
        color: #fefefe;
    }
}

.bg-blobs {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;

    .blob {
        position: absolute;
        border-radius: 50%;
        filter: blur(100px);
        opacity: 1;
        animation: rotateBlob 20s linear infinite;
        mix-blend-mode: screen;
    }

    .blob1 {
        width: 40vw;
        height: 40vh;
        top: -20%;
        left: -20%;
        background: #5c7cfa;
    }

    .blob2 {
        width: 35vw;
        height: 35vh;
        top: 10%;
        right: -15%;
        background: #20c997;
        animation-name: rotateBlobReverse;
        animation-delay: -10s;
    }

    .blob3 {
        width: 50vw;
        height: 50vh;
        bottom: -20%;
        left: -10%;
        background: #ffd6e8;
        animation-delay: -20s;
    }

    .blob4 {
        width: 30vw;
        height: 30vh;
        top: 45%;
        left: 40%;
        background: #a5d8ff;
        animation-name: rotateBlobReverse;
        animation-delay: -5s;
    }

    .blob5 {
        width: 25vw;
        height: 25vh;
        bottom: -15%;
        right: -10%;
        background: #d0bfff;
        animation-delay: -22s;
    }

    .blob6 {
        width: 30vw;
        height: 30vh;
        top: 20%;
        left: 60%;
        background: #b2f2bb;
        animation-delay: -15s;
    }

    .blob7 {
        width: 28vw;
        height: 28vh;
        bottom: 5%;
        left: 5%;
        background: #ffe066;
        animation-name: rotateBlobReverse;
        animation-delay: -30s;
    }

    .blob8 {
        width: 20vw;
        height: 20vh;
        top: 35%;
        right: 25%;
        background: #ff8787;
        animation-delay: -12s;
    }

    .blob9 {
        width: 18vw;
        height: 18vh;
        bottom: 30%;
        right: 35%;
        background: #fab005;
        animation-name: rotateBlobReverse;
        animation-delay: -18s;
    }

    .blob10 {
        width: 15vw;
        height: 15vh;
        top: 10%;
        left: 25%;
        background: #63e6be;
        animation-delay: -25s;
    }



}

@keyframes rotateBlob {
    0% {
        transform: translate(0, 0) scale(1) rotate(0deg);
    }

    25% {
        transform: translate(30vw, -10vh) scale(1.1) rotate(90deg);
    }

    50% {
        transform: translate(-20vw, 30vh) scale(1.2) rotate(180deg);
    }

    75% {
        transform: translate(40vw, 10vh) scale(1.1) rotate(270deg);
    }

    100% {
        transform: translate(0, 0) scale(1) rotate(360deg);
    }
}


@keyframes rotateBlobReverse {
    0% {
        transform: translate(0, 0) scale(1) rotate(0deg);
    }

    25% {
        transform: translate(-30vw, 10vh) scale(0.9) rotate(-90deg);
    }

    50% {
        transform: translate(20vw, -30vh) scale(1.1) rotate(-180deg);
    }

    75% {
        transform: translate(-40vw, -10vh) scale(1) rotate(-270deg);
    }

    100% {
        transform: translate(0, 0) scale(1) rotate(-360deg);
    }
}
</style>
