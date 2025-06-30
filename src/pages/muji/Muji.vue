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
                    <h3 class="name">{{ category.name }}</h3>
                </a>
            </div>
        </section>

        <!-- 신상품 섹션 -->
        <section class="product-section">
            <h2 class="section-title">신상품 상품</h2>

            <nav class="product-nav">
                <ul class="nav-list">
                    <li class="item" v-for="(sort, index) in sorts" :key="index">
                        <button type="button" :class="{ on: activeIndex === index }" @click="activeIndex = index">
                            {{ sort }}
                        </button>
                    </li>
                </ul>
            </nav>

            <ul class="product-list">
                <li class="product-item" v-for="(item, index) in newItems[activeIndex]" :key="index">
                    <a href="">
                        <figure class="img-wrap">
                            <img :src="item.img" :alt="item.name" />
                        </figure>
                        <h3 class="name">{{ item.name }}</h3>
                        <dl class="info-wrap">
                            <dt class="price">
                                <span>{{ item.price }}원</span>
                            </dt>
                            <dd class="review-wrap">
                                <span class="rate">{{ item.rate }}</span>
                                <span class="review">({{ item.review }})</span>
                            </dd>
                        </dl>
                    </a>
                </li>
            </ul>

        </section>

        <!-- 스크롤 영역 -->
        <!-- 반응형일때는 하나씩 노출시켜야함 -->
        <div class="scroll-section" v-if="false">
            <section class="banner-section">
                <figure class="img-wrap">
                    <img src="" alt="">
                </figure>
            </section>
            <section class="recommend-section">
                <article class="recommend-card">
                    <figure class="img-wrap"></figure>
                </article>
            </section>
        </div>

        <section class="event-section" v-if="false">
            <article class="event-card">

            </article>
        </section>
    </main>

    <!-- 푸터 -->
    <footer class="footer" v-if="false">
        <div class="container">
            <p>© 2025 MUJI Korea Clone. All rights reserved.</p>
        </div>
    </footer>

</template>

<script setup>
import { ref } from 'vue';

// 카테고리 배열
const categories = [
    { name: '남성', img: '/muji/img/cate_1.png' },
    { name: '여성', img: '/muji/img/cate_2.png' },
    { name: '아동', img: '/muji/img/cate_3.png' },
    { name: '패션잡화', img: '/muji/img/cate_4.png' },
    { name: '주방용품', img: '/muji/img/cate_5.png' },
    { name: '패브릭', img: '/muji/img/cate_6.png' },
    { name: '수납/정리', img: '/muji/img/cate_7.png' },
    { name: '가구', img: '/muji/img/cate_8.png' },
    { name: '생활용품', img: '/muji/img/cate_9.png' },
    { name: '가전/디지털', img: '/muji/img/cate_10.png' },
    { name: '문구', img: '/muji/img/cate_11.png' },
    { name: '뷰티', img: '/muji/img/cate_12.png' },
    { name: '간편조리', img: '/muji/img/cate_13.png' },
    { name: '스낵', img: '/muji/img/cate_14.png' },
    { name: '숏클립', img: '/muji/img/cate_15.png' },
    { name: 'N배송', img: '/muji/img/cate_16.png' },
];

// 신상품 분류
const sorts = ['남성', '여성', '아동', '패션잡화', '주방용품', '패브릭', '수납/정리', '가구', '생활용품', '가전/디지털', '문구', '뷰티', '간편조리', '스낵', '숏클립', 'N배송'];
const activeIndex = ref(0)
const newItems = [
    // 남성 탭
    [
        {
            name: '셔츠',
            price: '29,000',
            rate: '4.5',
            review: '10',
            img: '/muji/img/man_1.webp'
        },
        {
            name: '바지',
            price: '35,000',
            rate: '4.7',
            review: '5',
            img: '/muji/img/man_2.webp'
        }
    ],
    // 여성 탭
    [
        {
            name: '원피스',
            price: '49,000',
            rate: '4.8',
            review: '12',
            img: '/muji/img/woman_1.webp'
        },
        {
            name: '블라우스',
            price: '39,000',
            rate: '4.3',
            review: '3',
            img: '/muji/img/woman_2.webp'
        }
    ],
    // 식품 탭
    [
        {
            name: '쿠키',
            price: '5,000',
            rate: '5.0',
            review: '30',
            img: '/muji/img/food_1.webp'
        },
        {
            name: '커피',
            price: '9,900',
            rate: '4.9',
            review: '18',
            img: '/muji/img/food_2.webp'
        }
    ]
];



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

    .rate {}

    .review {}

}
</style>
