<template>
    <div class="mint-landing">
        <section class="hero-section">
            <div class="hero-inner">
                <h1 class="hero-title">필리핀 수강권<br />한정 할인 이벤트</h1>
                <p class="hero-subtitle">지금 구매하면 최대 <strong>42만원 절약</strong>!</p>
                <button class="hero-btn">지금 구매하기</button>
            </div>
        </section>

        <section class="price-section">
            <div class="container">
                <h2 class="section-title">가격 비교</h2>
                <p class="section-subtitle">12개월 / 전화 수업 기준</p>
                <div class="price-grid">
                    <div class="price-card">
                        <h3 class="card-label">정가</h3>
                        <p class="card-value">1,270,080원</p>
                    </div>
                    <div class="price-card highlight">
                        <h3 class="card-label">할인가</h3>
                        <p class="card-value">1,164,240원</p>
                    </div>
                    <div class="price-card">
                        <h3 class="card-label">절약액</h3>
                        <p class="card-value">105,840원</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="benefit-section">
            <div class="container">
                <h2 class="section-title">혜택 요약</h2>
                <ul class="benefit-list">
                    <li class="benefit-item"><span class="icon">✔️</span>10분 출석부 3개 포함</li>
                    <li class="benefit-item"><span class="icon">🎯</span>포인트 적립 최대 123,456P</li>
                    <li class="benefit-item"><span class="icon">⏰</span>오늘 마감 시 추가 혜택!</li>
                </ul>
            </div>
        </section>

        <section class="cta-section">
            <div class="container">
                <div class="cta-content">
                    <h2 class="cta-title">혜택 마감까지 </h2>
                    <div class="timer-wrap">
                        <span class="d-day">D-5</span>
                        <p class="cta-timer"></p>
                    </div>
                </div>
            </div>
        </section>
        <button class="btn-buy">10분 출석부 구매하기</button>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

onMounted(() => {
    const tl = gsap.timeline({ defaults: { opacity: 0, ease: 'power3.out' } })
    tl.from('.hero-title', { y: 60, duration: 1 })
        .from('.hero-subtitle', { y: 40, duration: 0.8 }, '-=0.6')
        .from('.hero-btn', { scale: 0.8, duration: 0.6, delay: 0.2 })
        .from('.price-card', { stagger: 0.2, duration: 0.6 }, '-=0.4')
        .from('.benefit-item', { x: -20, stagger: 0.2, duration: 0.6 }, '-=0.4')
        .from('.cta-title', { y: 40, duration: 0.6 }, '-=0.4')
        .from('.btn-buy', { scale: 0.8, duration: 0.6 }, '-=0.4')
})


document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        let secondsLeft = 3600;
        function Timer(sec) {
            const h = String(Math.floor(sec / 3600)).padStart(2, '0');
            const m = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
            const s = String(sec % 60).padStart(2, '0');
            return `${h}:${m}:${s}`;
        }

        const timerEl = document.querySelector('.cta-timer');
        const interval = setInterval(() => {
            if (secondsLeft <= 0) {
                clearInterval(interval);
                return
            }
            secondsLeft--;
            timerEl.textContent = Timer(secondsLeft);
        }, 1000)
    }, 1000);

})

</script>

<style scoped lang="scss">
@use '@/assets/styles/mixins' as *;

// url(https://cdn.mintspeaking.com/assets/icon/landing/mint_introduce/img_intro_bg.png) no-repeat top center / auto 84.5rem
// https://cdn.mintspeaking.com/assets/icon/landing/mint_introduce/img_intro_phone.png
.mint-landing {
    padding-top: constant(safe-area-inset-top);
    padding-bottom: constant(safe-area-inset-bottom);
    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);
}

.container {
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 2rem;
}

.section-title {
    @include font-24(700);
    color: #111;
}

.section-subtitle {
    margin-top: 0.4rem;
    @include font-16(500);
    color: #555;
}

.hero-section {
    @include flexBox;
    text-align: center;
    height: 60vh;
    background: #f8f8f8;
}

.hero-title {
    text-align: center;
    @include font-48(800);
    color: #111;
}

.hero-subtitle {
    @include font-24(500);
    margin: 2.4rem 0;
    color: #333;
}

.hero-btn {
    width: 100%;
    padding: 2rem 3.2rem;
    background: #5c7cfa;
    border: none;
    border-radius: 99rem;
    @include font-24;
    color: #fff;
    cursor: pointer;
    box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.2);

    &:hover {
        background: #4b63d3;
    }
}

.price-section {
    padding: 4rem 0;
}

.price-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 2rem;
    margin-top: 2.4rem;
}

.price-card {
    background: #fff;
    padding: 2rem;
    border: 1px solid #ddd;
    border-radius: 1.6rem;
    @include shadow4;

    &.highlight {
        border: 2px solid #111;
    }
}

.card-label {
    @include font-18(500);
    color: #555;
}

.card-value {
    @include font-24(700);
    color: #111;
}

.benefit-section {
    padding: 4rem 0;
    background: #f8f8f8;
}

.benefit-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
}

.benefit-item {
    display: flex;
    align-items: center;
    @include font-24(600);
    gap: 0.8rem;
    color: #111;
}

.cta-section {
    padding: 4rem 0;
    background: #fff;
}

.cta-content {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3.2rem;
}

.cta-title {
    @include font-48(700);
    color: #111;
}

.timer-wrap {
    @include font-32(700);
    text-align: center;

    .d-day {
        color: #e53935;
    }

    .cta-timer {
        color: #111;
    }
}



.btn-buy {
    position: sticky;
    bottom: 2rem;
    display: block;
    width: 80%;
    margin: 0 auto 4rem;
    padding: 2rem 3.2rem;
    background: #5c7cfa;
    border: none;
    border-radius: 99rem;
    @include font-24;
    color: #fff;
    cursor: pointer;
    box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.2);
    z-index: 5;
    &:hover {
        background: #4b63d3;
    }
}
</style>
