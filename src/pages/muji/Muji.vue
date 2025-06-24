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
            <div>배너 1</div>
            <div>배너 2</div>
            <div>배너 3</div>
        </div>
    </section>

    <!-- 카테고리 섹션 -->
    <section class="category-section">
        <h2>카테고리</h2>
        <div class="category-list">
            <a href="" class="item">
                <figure class="img-wrap"></figure>
                <h3 class="name">카테고리 이름 1</h3>
            </a>
        </div>
    </section>

    <!-- 신상품 섹션 -->
    <section class="product-section">
        <h2>신상품 상품</h2>
        <nav>
            <ul>
                <li>
                    <button type="button">신상품이 입고 되었어요</button>
                </li>
            </ul>
        </nav>
        <ul class="products">
            <li class="">
                <figure>
                    <img src="" alt="">
                </figure>
                <h3 class="name">상품명</h3>
                <dl>
                    <dt>
                        <span>1234원</span>
                    </dt>
                    <dd>
                        <span>0.0</span>
                        <span>(0)</span>
                    </dd>
                </dl>
            </li>
        </ul>
    </section>

    <!-- 스크롤 영역 -->
    <div class="scroll-section">
        <section class="banner-section">
            <figure class="img-wrap">
                <img src="" alt="">
            </figure>
        </section>
        <section class="">
            <article class="">
                <figure class="img-wrap"></figure>
            </article>
        </section>
    </div>

    <section class="event-section">
        <article class="event-card">

        </article>
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
