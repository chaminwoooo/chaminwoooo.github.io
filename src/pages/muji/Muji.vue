<template>
    <header class="header">
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
    <section class="main-banner">
        <div class="banner-slider">
            <!-- <div class="slide active"><img src="./assets/images/banner1.jpg" alt="Banner 1" /></div> -->
            <!-- <div class="slide"><img src="./assets/images/banner2.jpg" alt="Banner 2" /></div> -->
            <!-- <div class="slide"><img src="./assets/images/banner3.jpg" alt="Banner 3" /></div> -->
        </div>
    </section>

    <!-- 기획전 섹션 -->
    <section class="promotion">
        <div class="container">
            <h2>기획전</h2>
            <ul class="promotion-list">
                <!-- <li><img src="./assets/images/promo1.jpg" alt="Promo 1" /></li> -->
                <!-- <li><img src="./assets/images/promo2.jpg" alt="Promo 2" /></li> -->
                <!-- <li><img src="./assets/images/promo3.jpg" alt="Promo 3" /></li> -->
            </ul>
        </div>
    </section>

    <!-- 추천 상품 섹션 -->
    <section class="product-list">
        <div class="container">
            <h2>추천 상품</h2>
            <ul class="products">
                <li class="product-card">
                    <!-- <img src="./assets/images/product1.jpg" alt="Product 1" /> -->
                    <p class="name">무지 코튼 티셔츠</p>
                    <p class="price">₩19,900</p>
                </li>
                <li class="product-card">
                    <!-- <img src="./assets/images/product2.jpg" alt="Product 2" /> -->
                    <p class="name">무지 쇼핑백</p>
                    <p class="price">₩3,000</p>
                </li>
                <li class="product-card">
                    <!-- <img src="./assets/images/product3.jpg" alt="Product 3" /> -->
                    <p class="name">무지 손수건</p>
                    <p class="price">₩5,000</p>
                </li>
            </ul>
        </div>
    </section>

    <!-- 푸터 -->
    <footer class="footer">
        <div class="container">
            <p>© 2025 MUJI Korea Clone. All rights reserved.</p>
        </div>
    </footer>

</template>

<script setup>
</script>

<style scoped lang="scss">
    @use '@/assets/styles/mixins' as *;

    .header {
        height: 8.8rem;
        border: 1px solid #eee;
    }
    .container {
        @include flexBox($jc:flex-start);
        height: 100%;
        padding: 0 2.4rem;
        .nav-list {
            @include flexBox;
            column-gap: 4rem;
            margin-left: 2.4rem;
            a { @include font-18(600); }
        }
        .icons { margin-left: auto; }
    }
</style>
