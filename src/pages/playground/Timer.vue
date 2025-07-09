<template>
    <div class="airbnb-clone">
        <header class="header-section">
            <div class="logo">StayEasy</div>
            <div class="search-bar">
                <input type="text" placeholder="어디로 떠나시나요?" />
                <button>검색</button>
            </div>
            <div class="icons">
                <button>❤️</button>
                <button>🧳</button>
            </div>
        </header>

        <nav class="category-tabs">
            <ul>
                <li>🔥 인기</li>
                <li>🌊 해변 근처</li>
                <li>🌇 도시 중심</li>
                <li>🏕 자연 속</li>
                <li>🛋 트렌디</li>
            </ul>
        </nav>

        <main class="content">
            <section class="listing-section">
                <article class="listing-card">
                    <img src="https://via.placeholder.com/300x200" alt="숙소 이미지" />
                    <div class="info">
                        <h3>서울 감성 숙소</h3>
                        <p>₩89,000 / 박</p>
                        <button>❤️</button>
                    </div>
                </article>
                <article class="listing-card">
                    <img src="https://via.placeholder.com/300x200" alt="숙소 이미지" />
                    <div class="info">
                        <h3>제주 뷰티풀 하우스</h3>
                        <p>₩120,000 / 박</p>
                        <button>❤️</button>
                    </div>
                </article>
            </section>

            <section class="promo-banner">
                <h2>여름 특가! 지금 예약하면 최대 40% 할인</h2>
            </section>
        </main>

        <footer class="footer-section">
            <p>&copy; 2025 StayEasy. 모든 권리 보유.</p>
        </footer>
    </div>
</template>

<script setup>
// 스크립트 없음 (정적 구조)
</script>

<style scoped>
.airbnb-clone {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: 'Noto Sans KR', sans-serif;
}

.header-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.6rem 4vw;
    border-bottom: 1px solid #eee;
    background: #fff;
}

.logo {
    font-weight: 700;
    font-size: 1.8rem;
}

.search-bar {
    flex: 1;
    max-width: 40rem;
    display: flex;
    gap: 0.8rem;
    margin: 0 2rem;
}

.search-bar input {
    flex: 1;
    padding: 0.6rem 1rem;
    border: 1px solid #ccc;
    border-radius: 0.6rem;
}

.search-bar button {
    padding: 0.6rem 1.2rem;
    background: #ff385c;
    color: #fff;
    border: none;
    border-radius: 0.6rem;
    cursor: pointer;
}

.icons button {
    background: none;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
}

.category-tabs {
    overflow-x: auto;
    background: #fafafa;
    padding: 1rem 4vw;
}

.category-tabs ul {
    display: flex;
    gap: 1.6rem;
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 1.4rem;
}

.content {
    flex: 1;
    padding: 2rem 4vw;
    display: flex;
    flex-direction: column;
    gap: 4rem;
}

.listing-section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
}

.listing-card {
    background: #fff;
    border-radius: 1.2rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    overflow: hidden;
}

.listing-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.info {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.promo-banner {
    padding: 2rem;
    background: #fffae6;
    border: 1px solid #ffe58f;
    border-radius: 1rem;
    text-align: center;
    font-weight: 600;
    font-size: 1.4rem;
}

.footer-section {
    padding: 2rem 4vw;
    text-align: center;
    font-size: 1.2rem;
    color: #777;
    border-top: 1px solid #eee;
    background: #fafafa;
}
</style>
