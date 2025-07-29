<template>
    <header class="header" :class="{ hide: isHidden }">
        <div class="container">
            <h1 class="logo">
                <img src="/muji/img/common/logo.svg" alt="MUJI">
            </h1>
            <nav class="nav">
                <ul class="nav-list">
                    <li><router-link to="">신상품</router-link></li>
                    <li><router-link to="">여성</router-link></li>
                    <li><router-link to="">남성</router-link></li>
                    <li><router-link to="">생활용품</router-link></li>
                    <li><router-link to="">푸드</router-link></li>
                </ul>
            </nav>
            <div class="icons">
                <button class="btn-icon search" aria-label="검색"></button>
                <button class="btn-icon cart" aria-label="장바구니 보기"></button>
            </div>
        </div>
    </header>

    <!-- 메인 배너 -->
    <section class="main-banner">
        <Swiper
            :modules="[Autoplay, Navigation, Pagination]"
            :autoplay="{ delay: 5000 }"
            :loop="mainBanner.length > 3"
            :slides-per-view="1"
            :navigation="{
                nextEl: '.btn-banner-arrow.next',
                prevEl: '.btn-banner-arrow.prev'
            }"
            :pagination="{
                el: '.swiper-pagination',
                type: 'fraction' 
            }"
            class="main-swiper"
        >
            <SwiperSlide v-for="(item, i) in mainBanner" :key="i">
                <div class="txt-wrap" :class="{black : item.type == 'black'}">
                    <h3 class="title">{{ item.title }}</h3>
                    <p class="desc">{{ item.desc }}</p>
                </div>
                <img :src="item.img" :alt="item.title" />
            </SwiperSlide>
            <div class="btn-banner-arrow prev"></div>
            <div class="btn-banner-arrow next"></div>
            <div class="swiper-pagination"></div>
        </Swiper>
    </section>

    <main class="main-section">
        <!-- 카테고리 섹션 -->
        <section class="category-section">
            <h2 class="section-title">카테고리</h2>
            <div class="category-list">
                <a href="" class="item" v-for="(category, index) in categories" :key="index">
                    <figure class="img-wrap">
                        <img :src="category.img" :alt="category.name">
                    </figure>
                    <h3 class=name>{{ category.name }}</h3>
                </a>
            </div>
        </section>

        <!-- 신상품 섹션 -->
        <section class="product-section">
            <h2 class="section-title">신상품 상품</h2>
            <nav class="product-nav">
                <ul class="nav-list">
                    <li class="item" v-for="(category, index) in categories" :key="index">
                        <button type="button" :class="{ on: activeIndex === index }" @click="activeIndex = index">
                            {{ category.name }}
                        </button>
                    </li>
                </ul>
            </nav>

            <ul class="product-list">
                <li class="product-item" v-for="(item, index) in newItems[categories[activeIndex]?.key] || []" :key="index">
                    <a href="">
                        <figure class="img-wrap">
                            <img :src="item.img" :alt="item.name" />
                        </figure>
                        <h3 class=name>{{ item.name }}</h3>
                        <dl class="info-wrap">
                            <dt class=price>
                                <span>{{ item.price }}원</span>
                            </dt>
                            <dd class="review-wrap">
                                <span class=rate>{{ item.rate }}</span>
                                <span class=review>({{ item.review }})</span>
                            </dd>
                        </dl>
                    </a>
                </li>
            </ul>
        </section>

        <!-- 추천 배너 + 상품 영역 -->
        <div class="combie-section">
            <section class="banner-section">
                <router-link to="" class="banner-link">
                    <figure class="img-wrap">
                        <img src="/muji/img/recommend/banner_1.jpg" alt="시원한 반소매 파자마">
                    </figure>
                    <div class="txt-wrap">
                        <p class="sub-title">시원한 반소매 파자마</p>
                        <h3 class="title">소중한 사람과 함께 입는 파자마</h3>
                    </div>
                </router-link>
            </section>
            <section class="recommend-section">
                <article class="recommend-card" v-for ="(item,index) in recommendItems.slice(0,4)" :key="index">
                    <router-link to="">
                        <figure class="img-wrap">
                            <img :src="item.recommend.img" :alt="item.recommend.title">
                        </figure>
                        <div class="info-wrap">
                            <h4 class="title">{{ item.recommend.title }}</h4>
                            <p class="desc">{{ item.recommend.desc }}</p>
                            <ul class="product-list">
                                <li class="item" v-for="prd in item.product" :key="prd.img">
                                    <figure class="prd-img">
                                        <img :src="prd.img" :alt="prd.img">
                                    </figure>
                                    <p class="prd-name">{{ prd.name }}</p>
                                    <p class="prd-info">
                                        <div v-if="prd.per < 1">
                                            <span class="discount">
                                                <span class="per">{{ prd.per * 100 }}%</span>
                                                {{ prd.price.toLocaleString() }} 원
                                            </span>
                                            <span class="price">{{ (prd.price - (prd.price * prd.per)).toLocaleString() }} 원</span>
                                        </div>
                                        <span class="price" v-if="prd.per === 1">{{ prd.price.toLocaleString() }} 원</span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </router-link>
                </article>
            </section>
        </div>
        
        <div class="combie-section">
            <section class="recommend-section">
                <article class="recommend-card" v-for ="(item,index) in recommendItems.slice(4,8)" :key="index">
                    <router-link to="">
                        <figure class="img-wrap">
                            <img :src="item.recommend.img" :alt="item.recommend.title">
                        </figure>
                        <div class="info-wrap">
                            <h4 class="title">{{ item.recommend.title }}</h4>
                            <p class="desc">{{ item.recommend.desc }}</p>
                            <ul class="product-list">
                                <li class="item" v-for="prd in item.product" :key="prd.img">
                                    <figure class="prd-img">
                                        <img :src="prd.img" :alt="prd.img">
                                    </figure>
                                    <p class="prd-name">{{ prd.name }}</p>
                                    <p class="prd-info">
                                        <div v-if="prd.per < 1">
                                            <span class="discount">
                                                <span class="per">{{ prd.per * 100 }}%</span>
                                                {{ prd.price.toLocaleString() }} 원
                                            </span>
                                            <span class="price">{{ (prd.price - (prd.price * prd.per)).toLocaleString() }} 원</span>
                                        </div>
                                        <span class="price" v-if="prd.per === 1">{{ prd.price.toLocaleString() }} 원</span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </router-link>
                </article>
            </section>
            <section class="banner-section">
                <router-link to="" class="banner-link">
                    <figure class="img-wrap">
                        <img src="/muji/img/recommend/banner_2.jpg" alt="시원한 반소매 파자마">
                    </figure>
                    <div class="txt-wrap">
                        <p class="sub-title">유닛 선반 시리즈</p>
                        <h3 class="title">나만의 공간, 나만의 방식으로</h3>
                    </div>
                </router-link>
            </section>
        </div>

        <section class="event-section">
            <h2 class="section-title">From MUJI</h2>
            <div class="event-card-container">
                <div class="event-card-wrap">
                    <article class="event-card" v-for="(item, index) in eventInfo.slice(0,3)" :key="index">
                        <router-link to="">
                            <figure class="img-wrap">
                                <img :src="item.img" :alt="item.title">
                            </figure>
                            <div class="txt-wrap">
                                <h4 class="title">{{ item.title }}</h4>
                                <p class="desc">{{ item.desc }}</p>
                            </div>
                        </router-link>
                    </article>
                </div>
                <div class="event-card-wrap">
                    <article class="event-card" v-for="(item, index) in eventInfo.slice(3,6)" :key="index">
                        <router-link to="">
                            <figure class="img-wrap">
                                <img :src="item.img" :alt="item.title">
                            </figure>
                            <div class="txt-wrap">
                                <h4 class="title">{{ item.title }}</h4>
                                <p class="desc">{{ item.desc }}</p>
                            </div>
                        </router-link>
                    </article>
                </div>
                <div class="event-card-wrap">
                    <article class="event-card" v-for="(item, index) in eventInfo.slice(6,9)" :key="index">
                        <router-link to="">
                            <figure class="img-wrap">
                                <img :src="item.img" :alt="item.title">
                            </figure>
                            <div class="txt-wrap">
                                <h4 class="title">{{ item.title }}</h4>
                                <p class="desc">{{ item.desc }}</p>
                            </div>
                        </router-link>
                    </article>
                </div>
            </div>
        </section>
    </main>

    <!-- 푸터 -->
    <footer class="pc-footer" v-if="!isMobile">
        <div class="container">
            <p class="copyright">© 2025 MUJI Korea Clone. All rights reserved.</p>
        </div>
    </footer>
    <footer class="mo-footer" v-else>
        <nav class="footer-nav">
            <router-link to="/" class="nav-item">
                <HomeIcon size="24" color="#333"/> 
                <span>홈</span>
            </router-link>
            <router-link to="/" class="nav-item">
                <GridIcon size="24" color="#333"/> 
                <span>카테고리</span>
            </router-link>
            <router-link to="/" class="nav-item">
                <HeartIcon size="24" color="#333"/> 
                <span>찜</span>
            </router-link>
            <router-link to="/" class="nav-item">
                <UserIcon size="24" color="#333"/> 
                <span>마이</span>
            </router-link>
        </nav>
    </footer>
</template>









<!-- 스크립트 -->

<script setup>
/* 기본 라이브러리 */
import { ref, onMounted, onUnmounted, onBeforeUnmount } from 'vue';

/* 외부 컴포넌트 */
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

/* 상태 변수 정의 */

// - 메인배너 및 카테고리
const mainBanner = ref([]);
const categories = ref([]);

// - 신상품 섹션
const activeIndex = ref(0);
const newItems = ref({
    man: [],
    woman: [],
});

// - 추천/이벤트 상품
const recommendItems = ref([]);
const eventInfo = ref([]);

// - 뷰포트 정보
const isMobile = ref(false);

// - 헤더 숨김 여부
const isHidden = ref(false);


/*  데이터 패칭 함수 */

async function fetchJson(path) {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`${path} 불러오기 실패`);
    return await res.json();
}


/*  onMounted: 초기 데이터 로딩 + 이벤트 등록 */

onMounted(async () => {
    try {
        const [bannerData, cateData, newData, recommendData, eventData] = await Promise.all([
            fetchJson('/muji/data/banner/main-banner.json'),
            fetchJson('/muji/data/category/category.json'),
            fetchJson('/muji/data/products/new-items.json'),
            fetchJson('/muji/data/products/recommend-items.json'),
            fetchJson('/muji/data/products/event.json'),
        ]);

        mainBanner.value = bannerData;
        categories.value = cateData;
        newItems.value = newData;
        recommendItems.value = recommendData;
        eventInfo.value = eventData;

        checkViewport(); // 초기 체크
        window.addEventListener('resize', checkViewport);
        window.addEventListener('scroll', handleScroll);
    } catch (error) {
        console.error('에러데스네: ', error);
    }
});


/* 언마운트 시 이벤트 제거 */

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', checkViewport);
});


/* 뷰포트 체크 함수 */

function checkViewport() {
    isMobile.value = window.innerWidth <= 1024;
}


/* 스크롤 시 헤더 숨김 */

let lastScrollY = window.scrollY;

function handleScroll() {
    const currentY = window.scrollY;
    isHidden.value = currentY > lastScrollY && currentY > 88;
    lastScrollY = currentY;
}

</script>











<!-- 스타일 -->

<style scoped lang="scss">
@use '@/assets/styles/pages/muji';
</style>
