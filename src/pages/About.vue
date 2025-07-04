<template>
    <div v-if="false">
        <section class="intro">
            <h1>안녕하세요. 웹 퍼블리셔 차민우입니다.</h1>
            <p>5년간 다양한 웹사이트와 이벤트 페이지의 퍼블리싱을 담당해왔으며,<br>
                효율적인 코드 설계와 UI 품질 개선에 집중해왔습니다.</p>
            <ul class="skills">
                <li>HTML5 / CSS3 / SCSS / BEM / Web Standards</li>
                <li>Vanilla JS / Vue.js (기초) / GSAP / Swiper</li>
                <li>Git / Bitbucket / Jira / Zeplin / Figma</li>
            </ul>
        </section>
        <section class="about">
            <h2>About Me</h2>
            <p>퍼블리싱을 단순 구현을 넘어서, UI/UX의 완성도와 유지보수성을 고려하여 작업합니다.<br>
                개발자와의 협업 경험이 풍부하며, 점진적으로 프론트엔드 개발까지 역량을 확장하고 있습니다.</p>

            <p>Email: cha.minwoo.dev@gmail.com<br>
                GitHub: github.com/your-id<br>
                Portfolio Site: cha-minwoo.dev</p>
        </section>
    </div>
    <section class="career-section">
        <ul class="career-list">
            <li v-for="(job, index) in jobs" :key="index">
                <button class="job-title" @click="toggle(index)">
                    <div v-if="false">
                        {{ job.company }} <span>{{ job.period }}</span>
                    </div>
                </button>
                <transition name="slide">
                    <div class="job-detail" v-show="openedIndex === index">
                        <p class="title">주요 프로젝트</p>
                        <ul>
                            <li v-for="project in job.projects" :key="project.name">
                                - {{ project.name }} ({{ project.period }})<br />
                                담당: {{ project.desc }}<br />
                                기술: {{ project.tech.join(', ') }}
                            </li>
                        </ul>
                    </div>
                </transition>
            </li>
        </ul>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const openedIndex = ref(null)
function toggle(index) {
    openedIndex.value = openedIndex.value === index ? null : index
}

const jobs = [
    {
        company: '(주) 에듀서브',
        period: '2023.12 ~ 재직 중',
        projects: [
            {
                name: "'민트영어' 서비스 운영",
                period: '2024~',
                desc: '이벤트 템플릿화 및 SCSS 리팩토링, 운영업무',
                tech: ['HTML', 'SCSS', 'Git']
            }
        ]
    },
    {
        company: '(주)아이이에이',
        period: '2021.04 ~ 2023.07',
        projects: [
            {
                name: '칠성살롱 홈페이지 구축',
                period: '2021.04 ~ 2021.06',
                desc: '카페24 기반 홈페이지 퍼블리싱 / 템플릿 커스터마이징 적응',
                tech: ['HTML', 'CSS', 'jQuery', '카페24']
            },
            {
                name: '롯데카드 LOCA 2.0',
                period: '2021.06 ~ 2021.10',
                desc: '혜택/카드매니저/이벤트 페이지 리뉴얼 및 웹표준 대응',
                tech: ['HTML', 'CSS', 'jQuery', 'Git']
            },
            {
                name: 'LF Mall 운영',
                period: '2021.10 ~ 2022.03',
                desc: '기획전/이벤트 퍼블리싱 및 템플릿 정리 경험',
                tech: ['HTML', 'CSS', 'jQuery', 'Git']
            },
            {
                name: 'GS SHOP 운영',
                period: '2022.04 ~ 2023.06',
                desc: 'SCSS 구조화 및 재사용 가능한 퍼블리싱 컴포넌트 구성 경험',
                tech: ['HTML', 'SCSS', 'jQuery', 'Javascript', 'SVN', 'Git']
            }
        ]
    },
    {
        company: '(주)현대포리텍',
        period: '2019.08 ~ 2020.03',
        role: '생산·공정관리자',
        projects: []
    }
]
</script>

<style scoped lang="scss">
@use '@/assets/styles/mixins' as *;
.career-section { 
    margin-top: 1.6rem;
}

.job-title {
    background: #e9ecef;
    border: none;
    padding: 2.4rem;
    width: 100%;
    text-align: left;
    cursor: pointer;
}

.job-detail {
    display: flex;
    flex-direction: column;
    row-gap: 2.4rem;
    padding: 2.4rem;
    background: #f8f9fa;
    border: 1px solid #ced4da;
    @include font-16;
    
    strong { font-weight: 700; }
    ul {
        display: flex;
        flex-direction: column;
        row-gap: 1.6rem;
    }
}

.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s ease;
    overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
    max-height: 0;
    opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
    max-height: 300px;
    opacity: 1;
}
</style>
