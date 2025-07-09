<!-- src/pages/Home.vue -->
<template>

    <!-- Header -->
    <header class="home-header">
        <h1 class="logo"><router-link to="/">🌞👋 MINWOO'S PORTFOLIO</router-link></h1>
        <nav class="home-nav">
            <button type="button" class="btn-go" data-target="about">ABOUT ME</button>
            <button type="button" class="btn-go" data-target="work">WORK</button>
            <button type="button" class="btn-go" data-target="project">PROJECT</button>
            <button type="button" class="btn-go" data-target="contact">CONTACT</button>
        </nav>
    </header>
    <!--// Header -->

    <!-- 인트로 -->
    <section class="intro-section">
        <h2 class="intro-title">MINWOO'S<br>PORTFOLIO</h2>
        <p class="intro-desc">
            안녕하세요, 웹 퍼블리셔 차민우입니다. <br>
            재사용 가능한 코드와 구조적인 마크업에 관심이 많으며, <br>
            사용자에게 편리한 UI를 만드는 데 집중하고 있습니다.
        </p>
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
    </section>
    <!--// 인트로 -->

    <section id="about">
        <!-- About Me -->
        <section class="about-section">
            <h2 class="section-title">About Me</h2>

            <div class="about-wrap">
                <figure class="img-wrap">
                    <img src="/home/img/about-me.png" alt="차민우 일러스트">
                </figure>

                <p class="desc">
                    퍼블리싱을 단순한 구현을 넘어, <br> UI/UX의 완성도와 유지보수성을 고려해 작업합니다.<br>
                    실무에서는 다양한 기획전 및 이벤트 페이지의 퍼블리싱과 <br>
                    커머스 사이트 운영 유지보수 업무를 맡아왔으며,<br>
                    효율적인 코드 설계와 팀 협업 경험을 통해 <br>
                    점진적으로 프론트엔드 개발로 역량을 확장하고 있습니다.
                </p>
            </div>
        </section>
        <!--// About Me -->

        <!-- Career -->
        <section class="career-section">
            <h2 class="section-title">Career</h2>

            <div class="info-card">
                <h3>(주) 에듀서브 <span class="period">2023.12 ~ 재직 중</span></h3>
                <ul>
                    <li>
                        <p class="sub-title">민트영어 서비스 운영 (2023.12 ~ )</p>
                        - 이벤트 템플릿화 및 SCSS 리팩토링, 운영업무<br>
                        - 이벤트 템플릿 제작 및 SCSS 디자인시스템 적용으로 작업 시간 단축
                        <span class="tech">HTML, SCSS, Git</span>
                    </li>
                </ul>
            </div>

            <div class="info-card">
                <h3>(주) 아이이에이 <span class="period">2021.04 ~ 2023.07</span></h3>
                <ul>
                    <li>
                        <p class="sub-title">칠성살롱 홈페이지 구축 (2021.04 ~ 2021.06)</p>
                        - 카페24 기반 홈페이지 퍼블리싱 / 템플릿 커스터마이징
                        <span class="tech">HTML, CSS, jQuery, 카페24</span>
                    </li>
                    <li>
                        <p class="sub-title">롯데카드 LOCA 2.0 (2021.06 ~ 2021.10)</p>
                        - 혜택/카드매니저/이벤트 페이지 리뉴얼 및 웹표준 대응
                        <span class="tech">HTML, CSS, jQuery, Git</span>
                    </li>
                    <li>
                        <p class="sub-title">LF Mall 운영 (2021.10 ~ 2022.03)</p>
                        - 기획전/이벤트 퍼블리싱 및 템플릿 정리
                        <span class="tech">HTML, CSS, jQuery, Git</span>
                    </li>
                    <li>
                        <p class="sub-title">GS SHOP 운영 (2022.04 ~ 2023.06)</p>
                        - SCSS 구조화 및 퍼블리싱 컴포넌트 구성
                        <span class="tech">HTML, SCSS, jQuery, JavaScript, SVN, Git</span>
                    </li>
                </ul>
            </div>

            <div class="info-card">
                <h3>(주) 현대포리텍 <span class="period">2019.08 ~ 2020.03</span></h3>
                <ul>
                    <li>
                        <p class="sub-title">생산 · 공정관리자</p>
                        <p>공정 흐름 관리, 자재 수급 조율, 생산 일정 운영</p>
                    </li>
                </ul>
            </div>
        </section>
        <!--// Career -->
    </section>

    <!-- Skills -->
    <section class="skill-section">
        <ul class="skill-list">
            <li class="skill">
                <figure class="img-wrap">
                    <img src="/home/img/html.png" alt="HTML5">
                </figure>
            </li>
            <li class="skill">
                <figure class="img-wrap">
                    <img src="/home/img/css.svg" alt="CSS 3">
                </figure>
            </li>
            <li class="skill">
                <figure class="img-wrap">
                    <img src="/home/img/js.png" alt="JavaScript">
                </figure>
            </li>
            <li class="skill">
                <figure class="img-wrap">
                    <img src="/home/img/jquery.png" alt="jQuery">
                </figure>
            </li>
            <li class="skill">
                <figure class="img-wrap">
                    <img src="/home/img/vue.png" alt="Vue">
                </figure>
            </li>
            <li class="skill">
                <figure class="img-wrap">
                    <img src="/home/img/angular.svg" alt="Angular">
                </figure>
            </li>
            <li class="skill">
                <figure class="img-wrap">
                    <img src="/home/img/git.png" alt="Git">
                </figure>
            </li>
            <li class="skill">
                <figure class="img-wrap">
                    <img src="/home/img/figma.png" alt="Figma">
                </figure>
            </li>
            <li class="skill">
                <figure class="img-wrap">
                    <img src="/home/img/html.png" alt="HTML5">
                </figure>
            </li>
            <li class="skill">
                <figure class="img-wrap">
                    <img src="/home/img/css.svg" alt="CSS 3">
                </figure>
            </li>
            <li class="skill">
                <figure class="img-wrap">
                    <img src="/home/img/js.png" alt="JavaScript">
                </figure>
            </li>
            <li class="skill">
                <figure class="img-wrap">
                    <img src="/home/img/jquery.png" alt="jQuery">
                </figure>
            </li>
            <li class="skill">
                <figure class="img-wrap">
                    <img src="/home/img/vue.png" alt="Vue">
                </figure>
            </li>
            <li class="skill">
                <figure class="img-wrap">
                    <img src="/home/img/angular.svg" alt="Angular">
                </figure>
            </li>
            <li class="skill">
                <figure class="img-wrap">
                    <img src="/home/img/git.png" alt="Git">
                </figure>
            </li>
            <li class="skill">
                <figure class="img-wrap">
                    <img src="/home/img/figma.png" alt="Figma">
                </figure>
            </li>
        </ul>
    </section>
    <!--// Skills -->

    <!-- 실제 작업물 -->
    <section id="work" class="work-section">
        <h2 class="section-title">Work</h2>
        <div class="work-card-wrap">
            <article class="info-card">
                <button type="button">
                    <figure class="img-wrap">
                        <img src="/home/img/mint.png" alt="민트영어">
                    </figure>
                    <h3 class="title">민트영어</h3>
                    <p class="desc">Web,App | 유지보수 · 운영</p>
                </button>
            </article>
            <article class="info-card">
                <button type="button">
                    <figure class="img-wrap">
                        <img src="/home/img/gs-shop.jpg" alt="GS SHOP">
                    </figure>
                    <h3 class="title">GS SHOP</h3>
                    <p class="desc">Web,App | 유지보수 · 운영</p>
                </button>
            </article>
            <article class="info-card">
                <button type="button">
                    <figure class="img-wrap">
                        <img src="/home/img/lfmall.png" alt="LF MALL">
                    </figure>
                    <h3 class="title">LF MALL</h3>
                    <p class="desc">Web,App | 유지보수 · 운영</p>
                </button>
            </article>
            <article class="info-card">
                <button type="button">
                    <figure class="img-wrap">
                        <img src="/home/img/loca.jpg" alt="LOCA 2.0">
                    </figure>
                    <h3 class="title">롯데카드(LOCA 2.0)</h3>
                    <p class="desc">Web,App | 구축</p>
                </button>
            </article>
            <article class="info-card">
                <button type="button">
                    <figure class="img-wrap">
                        <img src="/home/img/chill.png" alt="칠성살롱">
                    </figure>
                    <h3 class="title">칠성살롱</h3>
                    <p class="desc">Web | Cafe24 · 구축 · 유지보수</p>
                </button>
            </article>
        </div>
    </section>
    <!--// 실제 작업물 -->

    <!-- 프로젝트 -->
    <section id="project" class="project-section">
        <div class="grid-box">
            <router-link class="info-card" v-for="(card, i) in cards" :key="i"
                :to="card.url" @mouseenter="onHover(card.img)" @mouseleave="onLeave">
                <h3>{{ card.title }}</h3>
                <p>{{ card.desc }}</p>
            </router-link>
            <div class="cursor" ref="cursorImg">
                <figure class="img-wrap">
                    <img :src="hoverImg" alt="샘플">
                </figure>
            </div>
        </div>
    </section>
    <!--// 프로젝트 -->

    <!-- Contact -->
    <section id="contact" class="contact-section">
        <div class="contact-blobs">
            <div class="blob blob1"></div>
            <div class="blob blob3"></div>
            <div class="blob blob7"></div>
        </div>
        <h2 class="title">함께 일할 웹 퍼블리셔를 찾고 계신가요?</h2>
        <p class="e-mail">chamw53@naver.com</p>
        <p class="desc">저에게 궁금한 점이 있으시다면 연락해 주세요 :) <br> 빠르게 답장 드리겠습니다!</p>
    </section>
    <!--// Contact -->

    <!-- Footer -->
    <footer class="footer">
        <span class="footer-txt">&copy; {{ new Date().getFullYear() }} CHA MINWOO. All rights reserved.</span>
    </footer>
    <!--// Footer -->


    <!-- 최상단 바로가기 버튼 -->
    <aside class="btn-fixed-wrap">
        <button type="button" class="btn-top">
            <ArrowUpIcon size="24" color="#777" />
        </button>
    </aside>

</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const cards = [
    { title: '🧺 MUJI', desc: '반응형 메인페이지 with Vue', bg: '#f2e8dc', url: "/project/muji", img: '/home/img/my_muji.jpg' },
    { title: '🏢 FastFive', desc: '투어신청 페이지 with GSAP', bg: '#e3f5e6', url: "/landing/fastfive", img: '/home/img/my_fastfive.jpg' },
    { title: '🔠 민트영어 ', desc: '이벤트 페이지 with GSAP', bg: '#c9f2d2', url: "/landing/mint", img: '/home/img/my_mint.jpg' },
    { title: '🚀 PLAYGROND', desc: '실험용 프로젝트', bg: '#fef6c9', url: "/playground/hub", img: '/home/img/my_playground.png' },
];

const toggleClassControl = () => {
    const header = document.querySelector('.home-header');
    const btnFixedWrap = document.querySelector('.btn-fixed-wrap');
    if (!header) return;

    if (window.scrollY > 0) {
        header.classList.add('on');
        btnFixedWrap.classList.add('on');
    } else {
        header.classList.remove('on');
        btnFixedWrap.classList.remove('on');
    }
}

const cursorImg = ref(null);
const hoverImg = ref(''); // 현재 hover된 카드의 이미지 경로

const onHover = (imgSrc) => {
    hoverImg.value = imgSrc;
    if (cursorImg.value) {
        cursorImg.value.style.opacity = '1';
    }
};

const onLeave = () => {
    if (cursorImg.value) cursorImg.value.style.opacity = '0';
};


onMounted(async () => {
    window.addEventListener('scroll', toggleClassControl);
    await nextTick();
    gsap.from('.intro-section .intro-title', {
        scrollTrigger: {
            trigger: '.intro-section',
            start: 'top 85%'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });

    gsap.from('.intro-section .intro-desc', {
        scrollTrigger: {
            trigger: '.intro-section',
            start: 'top 90%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: 'power3.out'
    });

    gsap.timeline({
        scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 50%',
        }
    })
    .from('.contact-section .title', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    })
    .from('.contact-section .e-mail', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, "-=0.4") 
    .from('.contact-section .desc', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, "-=0.4");
    
    // 영역 스크롤 이동 버튼
    const btnGo = document.querySelectorAll('.btn-go');
    btnGo.forEach((btn) => {
        btn.addEventListener('click', () => {
            const targetId = btn.dataset.target;
            const targetEl = document.getElementById(targetId);
            
            console.log(targetId)
            if (targetId == 'contact') {
                window.scrollTo({
                    top: targetEl.offsetTop,
                    behavior: 'smooth'
                })
            }else {
                window.scrollTo({
                    top: targetEl.offsetTop - 100,
                    behavior: 'smooth'
                })
            }
        })
    });
    // 스크롤 최상단이동 fixed 버튼
    const btnTop = document.querySelector('.btn-top');
    btnTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    });


    // 프로젝트 마우스hover 시 이미지 노출
    const cursorImgWrap = document.querySelector('.project-section .cursor .img-wrap');
    const cardLinks = document.querySelectorAll('.project-section .info-card');
    if (!cursorImgWrap) return; // 에러 방지

    const cardMouseHover = (e) => {
        cursorImgWrap.style.top = `${e.clientY}px`;
        cursorImgWrap.style.left = `${e.clientX}px`;
    }
    const showCursor = () => {
        cursorImgWrap.style.opacity = '1';
    };

    const hideCursor = () => {
        cursorImgWrap.style.opacity = '0';
    };

    document.addEventListener('mousemove', cardMouseHover);
    cardLinks.forEach((el) => {
        el.addEventListener('mouseenter', showCursor);
        el.addEventListener('mouseleave', hideCursor);
    });
});

// onUnmounted(() => {
//     window.removeEventListener('scroll', toggleClassControl);
//     document.removeEventListener('mousemove', cardMouseHover);
//     cardLinks.forEach((el) => {
//         el.removeEventListener('mouseenter', showCursor);
//         el.removeEventListener('mouseleave', hideCursor);
//     });
// });
</script>

<style scoped lang="scss">
@use '@/assets/styles/pages/home';
</style>
