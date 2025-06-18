<!-- src/pages/Home.vue -->
<template>
    <v-app>
        <main class="main">
            <section class="section">
                <h2 class="section-title">브랜드 사이트</h2>
                <div class="card-grid">
                    <router-link to="/brand-a" class="card">
                        <div class="card-box">Brand A</div>
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
    </v-app>
</template>

<script setup>
// 지금은 로직 없음
</script>

<style scoped lang="scss">
.main {
    padding: 2rem;
}

.section {
    margin-bottom: 3rem;
}

.section-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.card-grid {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.card-box {
    background: #f1f1f1;
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    min-width: 140px;
    font-weight: bold;
    transition: 0.2s;
}

.card-box:hover {
    background: #e1e1e1;
}
</style>
