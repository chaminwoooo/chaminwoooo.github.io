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
                <li class="product-item" v-for="(item, index) in newItems[categories[activeIndex].key]" :key="index">
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
    <footer class="footer">
        <div class="container">
            <p class="copyright">© 2025 MUJI Korea Clone. All rights reserved.</p>
        </div>
    </footer>

</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// 카테고리 배열
const categories = [
    { name: '남성', key: 'man', img: '/muji/img/category/cate_1.png' },
    { name: '여성', key: 'woman', img: '/muji/img/category/cate_2.png' },
    { name: '아동', key: 'kids', img: '/muji/img/category/cate_3.png' },
    { name: '패션잡화', key: 'fashion', img: '/muji/img/category/cate_4.png' },
    { name: '주방용품', key: 'kitchen', img: '/muji/img/category/cate_5.png' },
    { name: '패브릭', key: 'fabric', img: '/muji/img/category/cate_6.png' },
    { name: '수납/정리', key: 'storage', img: '/muji/img/category/cate_7.png' },
    { name: '가구', key: 'furniture', img: '/muji/img/category/cate_8.png' },
    { name: '생활용품', key: 'living', img: '/muji/img/category/cate_9.png' },
    { name: '가전/디지털', key: 'digital', img: '/muji/img/category/cate_10.png' },
    { name: '문구', key: 'stationery', img: '/muji/img/category/cate_11.png' },
    { name: '뷰티', key: 'beauty', img: '/muji/img/category/cate_12.png' },
    { name: '간편조리', key: 'easymeal', img: '/muji/img/category/cate_13.png' },
    { name: '스낵', key: 'snack', img: '/muji/img/category/cate_14.png' },
    { name: '숏클립', key: 'shortclip', img: '/muji/img/category/cate_15.png' },
    { name: 'N배송', key: 'ndelivery', img: '/muji/img/category/cate_16.png' },
]


// 신상품 분류
const activeIndex = ref(0);
const newItems = ref({
    man : [],
    woman: []
})
const recommendItems = ref([]);
const eventInfo = ref([]);
const mainBanner = ref([]);

onMounted(async ()=> {
    try {
        const [bannerData, newData, recommendData, eventData] = await Promise.all([
            fetchJson('/data/banner/main-banner.json'),
            fetchJson('/data/products/new-items.json'),
            fetchJson('/data/products/recommend-items.json'),
            fetchJson('/data/products/event.json')
        ])
        mainBanner.value = bannerData
        newItems.value = newData
        recommendItems.value = recommendData
        eventInfo.value = eventData

    } catch (error) {
        console.error('에러데스네: ', error);
    }
})

async function fetchJson(path) {
    const res = await fetch(path)
    if(!res.ok) throw new Error(`${path} 불러오기 실패`)
    return await res.json()
}


const isHidden = ref(false);
let lastScrollY = window.scrollY;

const handleScroll = () => {
    const currentY = window.scrollY
    if (currentY > lastScrollY && currentY > 88 ){
        isHidden.value = true
    } else {
        isHidden.value = false
    }
    lastScrollY = currentY
}
onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

</script>

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
    
    .logo { width: 100%; }
    
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
}

.main-banner {
    .main-swiper { position: relative; }
    .txt-wrap {
        position: absolute;
        bottom: 30%;
        left: 10%;
        color: #fff;
        &.black { color: #333; }
    }
    .title {
        @include font-32(700);
    }
    .desc {
        margin-top: 1.6rem;
        @include font-24(700);
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
        
        &.prev {
            left: 2.4rem;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='%2300000033'%3E%3Cpath d='m142-480 294 294q15 15 14.5 35T435-116q-15 15-35 15t-35-15L57-423q-12-12-18-27t-6-30q0-15 6-30t18-27l308-308q15-15 35.5-14.5T436-844q15 15 15 35t-15 35L142-480Z'/%3E%3C/svg%3E");
        }
        &.next {
            right: 2.4rem;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='%2300000033'%3E%3Cpath d='M579-480 285-774q-15-15-14.5-35.5T286-845q15-15 35.5-15t35.5 15l307 308q12 12 18 27t6 30q0 15-6 30t-18 27L356-115q-15 15-35 14.5T286-116q-15-15-15-35.5t15-35.5l293-293Z'/%3E%3C/svg%3E");
        }
    }
    
    
}

.main-section {
    display: flex;
    flex-direction: column;
    row-gap: 8rem;

    .section-title {
        @include font-24(700);
    }
}

.category-section {
    padding: 0 4.8rem;

    .category-list {
        display: flex;
        flex-wrap: wrap;
        column-gap: 6.4rem;
        row-gap: 6.4rem;
        margin-top: 4.8rem;
    }

    .item {
        @include inlineFlex;
        flex-direction: column;
        min-width: 0;
        padding: 1.2rem;

        &:hover {
            background-color: rgba($color: #ddd, $alpha: 0.3);
            border-radius: 1.6rem;
        }
    }

    .img-wrap {
        width: 10rem;
    }

    .name {
        margin-top: 1.6rem;
        @include font-18(600);
    }
}

.product-section {
    padding: 0 4.8rem;

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
    }

    .product-list {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        column-gap: 2.4rem;
        row-gap: 4rem;
        margin-top: 3.2rem;
    }

    .product-item {
        min-width: 0;

        &:hover {
            transform: scale(1.02);
            transition: all 0.2s;
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
        @include font-14;
        color: #777;
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
            img {
                @include imgObject;
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
        }
        .title {
            font-size: 5.2rem;
            font-weight: 700;
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
                
            }
        }
        
        .prd-img {
            width: 9rem;
            height: 9rem;
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
    }
}

.event-section {
    padding: 0 4.8rem;
    .section-title {
        @include font-24(700);
    }
    
    .event-card-container {
        display: grid;        
        grid-template-columns: repeat(3, 1fr);
        column-gap: 3.6rem;
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
    }
    
    
}

.footer {
    margin-top: 12rem;
    @include flexBox;
    height: 10rem;
    background-color: #e9ecef;
    
    .copyright { @include font-14; }
    
}


</style>
