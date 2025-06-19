<!-- src/pages/Home.vue -->
<template>
    <v-app class="home-layout">
        <header class="home-header">
            <h1 class="home-title">
                Ciao, mondo! <br>
                Buongiorno, sono CHA MINWOO.
            </h1>
        </header>


        <main class="main">
            <section class="section">
                <h2 class="section-title">브랜드 사이트</h2>
                <div class="card-grid">
                    <router-link to="/muji" class="card">
                        <div class="card-box">MUJI</div>
                    </router-link>
                    <router-link to="/brand-b" class="card">
                        <div class="card-box">Brand B</div>
                    </router-link>
                </div>
            </section>

            <section class="section">
                <h2 class="section-title">기타 프로젝트</h2>
                <div class="card-grid">
                    <router-link to="/tool" class="card">
                        <div class="card-box">Small Tool</div>
                    </router-link>
                    <router-link to="/js-playground" class="card">
                        <div class="card-box">JS PlayGround</div>
                    </router-link>
                </div>
            </section>
        </main>


        <v-footer class="footer">
            <span class="footer-txt">&copy; {{ new Date().getFullYear() }} CHAMINWOO. All rights reserved.</span>
        </v-footer>


    </v-app>
</template>

<script setup>
// 지금은 로직 없음
</script>

<style scoped lang="scss">
.home-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: linear-gradient(180deg,#f2eeea 0%,#e9e4e0 50%,#dcd6d1 100%);

}
.home-header {
    padding: 2.4rem;
}
.home-title {
    text-align: center;
    font-size: 3.2rem;
    font-weight: 700;
    font-style: italic;
    background: linear-gradient(90deg, #8a7c74, #d6bfa8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

}

.main {
    flex: 1;
    padding: 2rem;
}

.section {
    margin-bottom: 3rem;
}

.section-title {
    margin-bottom: 2.4rem;
    font-size: 2.4rem;
    font-weight: 600;
    color: #6b645e;
}

.card-grid {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.card {
    display: block;
}

.card-box {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    background-color: #f3f0ed;
    background: #f1f1f1;
    padding: 2rem 2.4rem;
    border-radius: 8px;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 500;
    transition: 0.2s;
}

.card-box:hover {
    background: #e1e1e1;
}

.footer {
    width: 100%;
    height: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    background-color: #b8b2ad;
    
    .footer-txt {
        font-size: 1.6rem;
        color: #fefefe;
    }
}
</style>
