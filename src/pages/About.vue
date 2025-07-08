<template>


    <section class="career-section">
        <h2>Career</h2>

        <div class="job">
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

        <div class="job">
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

        <div class="job">
            <h3>(주) 현대포리텍 <span class="period">2019.08 ~ 2020.03</span></h3>
            <ul>
                <li>
                    <p class="sub-title">생산 · 공정관리자</p>
                    <p>공정 흐름 관리, 자재 수급 조율, 생산 일정 운영</p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
    gsap.from('.intro-section h1', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    })

    gsap.from('.intro-section p', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: 'power3.out'
    })

    gsap.from('.skills li', {
        scrollTrigger: {
            trigger: '.skills',
            start: 'top 85%'
        },
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power3.out'
    })

    gsap.from('.career-section .job', {
        scrollTrigger: {
            trigger: '.career-section',
            start: 'top 90%'
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.3,
        ease: 'power3.out'
    })
})
</script>

<style scoped lang="scss">
@use '@/assets/styles/mixins' as *;




</style>