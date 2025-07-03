<template>
    <header class="header" v-if="false">
        <div class="container">
            <h1 class="logo">MUJI</h1>
            <nav class="nav">
                <ul class="nav-list">
                    <li><a href="#">신상품</a></li>
                    <li><a href="#">여성</a></li>
                    <li><a href="#">남성</a></li>
                    <li><a href="#">생활용품</a></li>
                    <li><a href="#">푸드</a></li>
                </ul>
            </nav>
            <div class="icons">
                <button class="search-btn">🔍</button>
                <button class="cart-btn">🛒</button>
            </div>
        </div>
    </header>


    <!-- 메인 배너 -->
    <section class="main-banner" v-if="false">
        <div class="banner-slider">
            <div>배너 1</div>
            <div>배너 2</div>
            <div>배너 3</div>
        </div>
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
                <article class="recommend-card" v-for ="(item,index) in recommendItemsOne" :key="index">
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
                <article class="recommend-card" v-for ="(item,index) in recommendItemsTwo" :key="index">
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
            <div class="event-card-wrap">
                <article class="event-card" v-for="(item, index) in eventInfo" :key="index">
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
import { ref, onMounted, shallowReadonly } from 'vue';

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

const recommendItemsOne = ref([]);
const recommendItemsTwo = ref([]);
const eventInfo = ref([]);

onMounted(async ()=> {
    try {
        const [newData, recommendDataOne, recommendDataTwo, eventData] = await Promise.all([
            fetchJson('/data/products/new-items.json'),
            fetchJson('/data/products/recommend-items-one.json'),
            fetchJson('/data/products/recommend-items-two.json'),
            fetchJson('/data/products/event.json'),
        ])
        newItems.value = newData
        recommendItemsOne.value = recommendDataOne.recItem
        recommendItemsTwo.value = recommendDataTwo.recItem
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

</script>

<style scoped lang="scss">
@use '@/assets/styles/mixins' as *;

.header {
    height: 8.8rem;
    border: 1px solid #eee;

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
            margin-left: auto;
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
        height: 100vh;
        flex-shrink: 0;
        overflow: hidden;
        
        .banner-link { position: relative; }
        
        .img-wrap {
            width: 100%;
            height: 100%;
            object-fit: cover;
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
        display: flex;
        flex-wrap: wrap;
        gap: 3.6rem;
        padding: 4.2rem 1.6rem;
        background: #e9ecef;
        overflow-y: auto;
        
        .recommend-card { background-color: #fff; }
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
            column-gap: 2.4rem;
            margin-top: 2.4rem;
            
            .item {
                display: flex;
                flex-direction: column;
            }
        }
        
        
        .prd-img {
            
        }
        
        .prd-name {
            @include ellipsis;
            @include font-16(600);
        }
        
        .prd-info { 
            margin-top: 0.8rem; 
            &:not(:has(.discount)) { margin-top: auto; }
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
    .event-card-wrap {
        display: grid;        
        grid-template-columns: repeat(3, 1fr);
        column-gap: 3.6rem;
        row-gap: 4.8rem;
        margin-top: 3.2rem;
    }
    
    .event-card {
        position: relative;
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
