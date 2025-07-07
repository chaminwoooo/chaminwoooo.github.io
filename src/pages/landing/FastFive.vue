<template>
    <section class="hero-section">
        <div class="hero-inner">
            <h1>우리 팀을 위한 완벽한 오피스</h1>
            <p>스타트업부터 대기업까지, 패스트파이브에서 시작해보세요.</p>
            <router-link to="" class="btn-tour">지금 투어 신청하기</router-link>
        </div>
    </section>

    <section class="benefits-section">
        <h2>FastFive의 주요 혜택</h2>
        <div class="card-grid">
            <div class="card">
                <div class="icon">🏙</div>
                <h3>전국 30개 지점</h3>
                <p>서울 전역에 위치한 역세권 오피스로 출퇴근도 편리하게</p>
            </div>
            <div class="card">
                <div class="icon">🤝</div>
                <h3>입주사 네트워킹</h3>
                <p>패스트파이브만의 커뮤니티 이벤트로 비즈니스 확장</p>
            </div>
            <div class="card">
                <div class="icon">🧑‍💻</div>
                <h3>유연한 계약</h3>
                <p>1인 스타트업부터 100인 팀까지 맞춤형 오피스 제공</p>
            </div>
        </div>
    </section>

    <section class="gallery-section">
        <h2>공간 미리보기</h2>
        <div class="swiper-wrap">
            <Swiper
                :modules="[Autoplay, Navigation]"
                :autoplay="{ delay: 5000 }"
                :loop="true"
                :slides-per-view="1"
                :breakpoints="{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }"
                :space-between="16"
                :navigation="{
                    nextEl: '.btn-banner-arrow.next',
                    prevEl: '.btn-banner-arrow.prev'
                }"
                class="main-swiper"
            >
                <SwiperSlide class="image-card" v-for="(item, i) in availableSpace" :key="i">
                    <figure class="img-wrap">
                        <img :src="`/fastfive/img/${item}.jpg`" :alt="`공간이미지 ${i + 1}`">
                    </figure>
                </SwiperSlide>
            </Swiper>
            <div class="btn-banner-arrow prev"></div>
            <div class="btn-banner-arrow next"></div>
        </div>
    </section>

    <section class="apply-section" id="apply">
        <h2>투어 신청</h2>
        <form>
            <input type="text" placeholder="이름" required />
            <input type="email" placeholder="이메일" required />
            <input type="text" placeholder="희망 지점" required />
            <button type="submit">신청하기</button>
        </form>
    </section>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    gsap.from('.hero-inner h1', {
        y: 60,
        opacity: 0,
        duration: 0.8
    })

    gsap.from('.hero-inner p', {
        y: 40,
        opacity: 0,
        delay: 0.2,
        duration: 0.8
    })

    gsap.from('.btn-tour', {
        scale: 0.8,
        opacity: 0,
        delay: 0.5,
        duration: 0.6
    })

    gsap.from('.card', {
        scrollTrigger: {
            trigger: '.benefits-section',
            start: 'top 85%'
        },
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 0.6
    })
})

const availableSpace = [
    "available_space_01",
    "available_space_02",
    "available_space_03",
    "available_space_04",
    "available_space_05",
    "available_space_06"
]

</script>

<style scoped lang="scss">
@use '@/assets/styles/mixins' as *;

.hero-section {
    
    // background: linear-gradient(135deg, #91faff, #5c7cfa);
    background: url("/fastfive/img/img_fastfive_bg.jpg") no-repeat top center;
    background-size: cover;
    padding: 6rem 2rem;
    color: white;
    text-align: center;

    .hero-inner {
        max-width: 720px;
        margin: 0 auto;
    }
    
    h1 { @include font-32(700); }
    
    p {
        margin-top: 1.6rem;
        @include font-18(500);
    }
    

    .btn-tour {
        display: inline-block;
        width: 100%;
        background: white;
        margin-top: 2.4rem;
        padding: 1.2rem 2.4rem;
        border-radius: 0.8rem;
        @include font-16(700);
        color: #5c7cfa;
        text-decoration: none;
        transition: background 0.3s;
        &:hover { background: #f1f3f5; }
    }
}

.benefits-section {
    background: #f8f9fa;
    padding: 4rem 2rem;
    text-align: center;

    h2 {
        @include font-24(700);
        margin-bottom: 2.4rem;
    }

    .card-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 1.6em;
        max-width: 1200px;
        margin: 0 auto;

        .card {
            background: white;
            border-radius: 1.2rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
            padding: 2rem;

            .icon {
                font-size: 2.4rem;
            }

            h3 {
                margin-top: 0.8rem;
                @include font-16(700);
            }

            p {
                margin-top: 1.6rem;
                @include font-14;
                color: #495057;
            }
        }
    }
}

.gallery-section {
    max-width: 1200px;
    margin: 0 auto;
    background: #fff;
    padding: 4rem 2rem;
    text-align: center;

    h2 {
        @include font-24(700);
        margin-bottom: 2rem;
    }
    
    .swiper-wrap {
        position: relative;
    }

    .image-card {
        .img-wrap {
            border-radius: 1.2rem;
            overflow: hidden;
        }
    }
    .btn-banner-arrow {
        @include absCenterY;
        display: inline-block;
        width: 4rem;
        height: 4rem;
        background-size: cover;
        background-repeat: no-repeat;
        cursor: pointer;
        z-index: 2;
        @include mobile { display: none; }
        
        &.prev {
            left: -6.4rem;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='%2300000033'%3E%3Cpath d='m142-480 294 294q15 15 14.5 35T435-116q-15 15-35 15t-35-15L57-423q-12-12-18-27t-6-30q0-15 6-30t18-27l308-308q15-15 35.5-14.5T436-844q15 15 15 35t-15 35L142-480Z'/%3E%3C/svg%3E");
        }
        &.next {
            right: -6.4rem;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='%2300000033'%3E%3Cpath d='M579-480 285-774q-15-15-14.5-35.5T286-845q15-15 35.5-15t35.5 15l307 308q12 12 18 27t6 30q0 15-6 30t-18 27L356-115q-15 15-35 14.5T286-116q-15-15-15-35.5t15-35.5l293-293Z'/%3E%3C/svg%3E");
        }
    }
}

.apply-section {
    background: #f8f9fa;
    padding: 4rem 2rem;
    text-align: center;

    h2 {
        @include font-24(700);
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        max-width: 400px;
        margin: 2rem auto;

        input,
        button {
            padding: 0.8rem 1.6rem;
            @include font-14;
            border-radius: 0.8rem;
        }

        input { border: 1px solid #dee2e6; }

        button {
            background: #5c7cfa;
            color: white;
            border: none;
            font-weight: 600;
            cursor: pointer;
            &:hover { background: #4c6ef5; }
        }
    }
}
</style>
