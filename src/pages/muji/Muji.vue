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
            :loop="true"
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
/* 1. 기본 라이브러리 */
import { ref, onMounted, onUnmounted, onBeforeUnmount } from 'vue';

/* 2. 외부 컴포넌트 */
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

/* 3. 상태 변수 정의 */

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


/* 4. 데이터 패칭 함수 */

async function fetchJson(path) {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`${path} 불러오기 실패`);
    return await res.json();
}


/*  onMounted: 초기 데이터 로딩 + 이벤트 등록 */

onMounted(async () => {
    try {
    const [bannerData, cateData, newData, recommendData, eventData] = await Promise.all([
        fetchJson('/data/banner/main-banner.json'),
        fetchJson('/data/category/category.json'),
        fetchJson('/data/products/new-items.json'),
        fetchJson('/data/products/recommend-items.json'),
        fetchJson('/data/products/event.json'),
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
@use '@/assets/styles/mixins' as *;

button  {
    background: transparent;
    border: 0;
    cursor: pointer;
}

.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 8.8rem;
    background: #fff;
    @include shadow2;
    transition: transform 0.3s ease;
    z-index: 1000;
    
    .logo {
        width: 100%; 
    }
    
    .container {
        @include flexBox($jc: flex-start);
        height: 100%;
        padding: 0 2.4rem;

        .nav-list {
            @include flexBox;
            column-gap: 4rem;
            margin-left: 2.4rem;

            a {
                @include font-18(600);
            }
        }

        .icons {
            margin-left: 3.2rem;
            @include inlineFlex;
            column-gap: 1.6rem;
        }
        @include mobile {
            justify-content: space-between;
        }
    }
    
    .btn-icon {
        display: inline-block;
        width: 3.2rem;
        height: 3.2rem;
        background-repeat: no-repeat;
        background-size: cover;
        
        &.search {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='%23555'%3E%3Cpath d='M380-320q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l224 224q11 11 11 28t-11 28q-11 11-28 11t-28-11L532-372q-30 24-69 38t-83 14Zm0-80q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z'/%3E%3C/svg%3E");
        }
        &.cart {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='%23555'%3E%3Cpath d='M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h440q17 0 28.5 11.5T760-320q0 17-11.5 28.5T720-280H280q-45 0-68-39.5t-2-78.5l54-98-144-304H80q-17 0-28.5-11.5T40-840q0-17 11.5-28.5T80-880h65q11 0 21 6t15 17l27 57Zm134 280h280-280Z'/%3E%3C/svg%3E");
        }
    }
    
    &.hide {
        transform: translateY(-100%);
    }
    
    @include mobile {
        height: 6.4rem;
        .btn-icon, nav, .icons {
            display: none;
        }
    }
}

.main-banner {
    margin-top: 8.8rem;
    .main-swiper { 
        position: relative; 
        @include mobile {
            height: 50vh;
            img { @include imgObject; }
        }
    }
    .txt-wrap {
        @include absCenterY;
        left: 10%;
        color: #fff;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
        
        &.black { color: #333; }
        
        @include mobile {
            width: 100%;
            @include absCenter;
            text-align: center
        }
    }
    .title {
        @include font-32(700);
        @include mobile {
            @include font-24(700);
        }
    }
    .desc {
        margin-top: 1.6rem;
        @include font-24(700);
        @include mobile {
            @include font-16(700);
        }
    }
    
    .swiper-pagination {
        width: fit-content;
        @include absCenterX;
        bottom: 2.4rem;
        background-color: rgba($color: #000000, $alpha: 0.4);
        padding: 1.2rem 2.4rem;
        border-radius: 2.4rem;
        @include font-14;
        color: #fff;
        @include mobile { display: none; }
    }
    
    .btn-banner-arrow {
        position: absolute;
        top: 50%;
        display: inline-block;
        width: 4rem;
        height: 4rem;
        background-size: cover;
        background-repeat: no-repeat;
        cursor: pointer;
        z-index: 2;
        
        @include mobile { display: none; }
        
        &.prev {
            left: 2.4rem;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='%2300000033'%3E%3Cpath d='m142-480 294 294q15 15 14.5 35T435-116q-15 15-35 15t-35-15L57-423q-12-12-18-27t-6-30q0-15 6-30t18-27l308-308q15-15 35.5-14.5T436-844q15 15 15 35t-15 35L142-480Z'/%3E%3C/svg%3E");
        }
        &.next {
            right: 2.4rem;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='%2300000033'%3E%3Cpath d='M579-480 285-774q-15-15-14.5-35.5T286-845q15-15 35.5-15t35.5 15l307 308q12 12 18 27t6 30q0 15-6 30t-18 27L356-115q-15 15-35 14.5T286-116q-15-15-15-35.5t15-35.5l293-293Z'/%3E%3C/svg%3E");
        }
    }
    
    @include mobile {
        margin-top: 6.4rem;
    }
    
    
}

.main-section {
    display: flex;
    flex-direction: column;
    row-gap: 8rem;
    margin-top: 8rem;
    .section-title {
        @include font-24(700);
    }
    
    @include mobile {
        row-gap: 6.4rem;
        margin-top: 6.4rem;
    }
}

.category-section {
    padding: 0 4.8rem;
    @include mobile {
        padding: 0 2rem;
    }
    
    .category-list {
        display: flex;
        flex-wrap: wrap;
        gap: 6.4rem;
        margin-top: 4.8rem;
        @include mobile {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2.4rem;
            margin-top: 2.4rem;
        }   
    }

    .item {
        @include inlineFlex;
        flex-direction: column;
        min-width: 0;
        padding: 1.2rem;

        &:hover {
            background-color: rgba($color: #ddd, $alpha: 0.3);
            border-radius: 1.6rem;
            @include mobile {
                background-color: transparent;
                border-radius: 0;
            }
        }
    }
    .img-wrap { width: 10rem; }

    .name {
        margin-top: 1.6rem;
        @include font-18(600);
    }
}

.product-section {
    padding: 0 4.8rem;
    
    @include mobile {
        padding: 0 2rem;
    }

    .product-nav {
        margin-top: 1.6rem;
    }

    .nav-list {
        display: flex;
        column-gap: 1.6rem;
        overflow-x: auto;
        overflow-y: hidden;

        button {
            display: inline-block;
            width: 100%;
            height: 100%;
            padding: 0.8rem 0;
            background: transparent;
            border: 0;
            @include font-16(500);
            color: #777;
            cursor: pointer;
            white-space: nowrap;

            &.on {
                @include font-18(700);
                color: #111;
            }
        }

        &::-webkit-scrollbar {
            width: 0;
        }
        
        @include mobile {
            margin: 0 -2rem;
            padding: 0 2rem;
        }
    }

    .product-list {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        column-gap: 2.4rem;
        row-gap: 4rem;
        margin-top: 3.2rem;
        @include mobile {
            grid-template-columns: repeat(2, 1fr);
            margin-top: 1.6rem;
        }
    }

    .product-item {
        min-width: 0;
        &:hover {
            transform: scale(1.02);
            transition: all 0.2s;
            @include mobile {
                transform: none;
                transition: none;
            }
        }
        
    }

    .name {
        margin-top: 0.8rem;
        @include font-16;
    }

    .info-wrap {
        @include flexBox($jc: space-between);
        margin-top: 0.4rem;
    }

    .price {
        @include font-18(700);
    }

    .review-wrap {
        @include inlineFlex;
        @include font-14;
        color: #777;
    }
    
    .rate {
        @include inlineFlex;
        &::before {
            content: '';
            display: inline-block;
            width: 2rem;
            height: 2rem;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='%2300000066'%3E%3Cpath d='m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143Zm126 18L314-169q-11 7-23 6t-21-8q-9-7-14-17.5t-2-23.5l44-189-147-127q-10-9-12.5-20.5T140-571q4-11 12-18t22-9l194-17 75-178q5-12 15.5-18t21.5-6q11 0 21.5 6t15.5 18l75 178 194 17q14 2 22 9t12 18q4 11 1.5 22.5T809-528L662-401l44 189q3 13-2 23.5T690-171q-9 7-21 8t-23-6L480-269Zm0-201Z'/%3E%3C/svg%3E");    
            background-size: cover;
        }
    }
}

.combie-section {
    display: flex;
    
    .banner-section {
        position: sticky;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        
        .banner-link { 
            position: relative; 
        }
        
        .img-wrap {
            height: 100vh;
            img { @include imgObject; }
            @include mobile {
                height: 50vh;
                img { object-position: top; }
            }
        }
        
        .txt-wrap {
            width: 100%;
            padding: 0 2.4rem;
            @include absCenterX;
            bottom: 10rem;
            color: #fff;
            text-align: left;
        }
        
        .sub-title {
            @include font-24(600);
            @include mobile {
                @include font-16(600);
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);

            }
        }
        
        .title {
            font-size: 5.2rem;
            font-weight: 700;
            @include mobile {
                @include font-32(700);
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);

            }
        }
        
        @include mobile {
            position:relative;
            width: 100%;
            order: 0;
        }
    }
    
    .recommend-section {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        gap: 3.6rem;
        padding: 3.6rem 1.6rem;
        background: #e9ecef;
        overflow-x: hidden;
        overflow-y: auto;
        
        .recommend-card { 
            width: calc(50% - 1.8rem);
            background-color: #fff; 
            @include mobile { width: 100%; }
        }
        .info-wrap { padding: 1.6rem; }
        .title { @include font-24(700); }
        .desc {
            margin-top: 1.6rem;
            @include font-14(500);
            color: #555;
        }
        
        .product-list {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            column-gap: 1.2rem;
            margin-top: 2.4rem;
            .item {
                display: flex;
                flex-direction: column;
                width: 9rem;
                @include mobile {
                    width: auto;
                }
                
            }
        }
        
        .prd-img {
            position: relative;
            width: 9rem;
            height: 9rem;
            @include mobile {
                width: auto;
                height: auto;
            }
            
            &::before {
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba($color: #000, $alpha: 0.05)
            }
        }
        
        .prd-name {
            margin-top: 0.4rem;
            @include ellipsis;
            @include font-14(600);
        }
        
        .prd-info { 
            margin-top: 0.8rem; 
        }
        
        .discount { 
            margin-bottom: 0.4rem;
            @include font-12(600); 
            color: #777;
            white-space: nowrap;
        }
        .price { 
            display: block;
            @include font-14(600); 
            white-space: nowrap;
        }
        
        .per {
            margin-right: 0.4rem;
            @include font-14(600);
            color: #f03e3e;
        }
        
        
        @include mobile {
            flex-direction: column;
            order: 1;
        }
        
    }
    @include mobile {
        flex-direction: column;
    }
}

.event-section {
    padding: 0 4.8rem;
    
    @include mobile {
        padding: 0 2rem;
    }
    .section-title {
        @include font-24(700);
    }
    
    .event-card-container {
        display: grid;        
        grid-template-columns: repeat(3, 1fr);
        column-gap: 3.6rem;
        
        @include mobile {
            grid-template-columns: repeat(1, 1fr);
        }
    }
    .event-card-wrap {
        display: flex;
        flex-direction: column;
        row-gap: 4.8rem;
        margin-top: 3.2rem;
    }
    
    .event-card {
        position: relative;
        height: fit-content;
        transition: all 0.3s ease-in-out;
        
        &:hover {
            transform: translateY(-16px);
            .txt-wrap { display: block; }
            @include mobile { transform: none; }
        }
    }
    
    .img-wrap {
        width: 100%;
    }
    
    .txt-wrap {
        @include absCenterX;
        bottom: 2.4rem;
        width: 90%;
        padding: 2.4rem;
        background-color: #fff;
        display: none;
        
        .title {
            @include font-18(700);
        }
        .desc {
            margin-top: 1.2rem;
            @include font-14;
            @include ellipsis;
        }
        
        @include mobile {
            position: static;
            display: block;
            width: 100%;
            transform: translateX(0);
            border: 1px solid #eee;
        }
    }
    
    
}

.pc-footer {
    margin-top: 12rem;
    @include flexBox;
    height: 10rem;
    background-color: #e9ecef;
    
    .copyright { @include font-14; }
}

.mo-footer {
    position: sticky;
    left: 0;
    bottom: 0;
    z-index: 2;
    
    .footer-nav {
        height: 6.4rem;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        background: #fff;
        @include shadow4;
    }
    .nav-item {
        @include inlineFlex;
        flex-direction: column;
        @include font-12(500);
    }
}



</style>
