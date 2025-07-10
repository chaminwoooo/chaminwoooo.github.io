<template>
    <section class="airbnb-section">
        <header class="airbnb-header">
            <router-link to="/project/airbnb" class="logo">
                <img src="/airbnb/img/logo.png" alt="Airbnb logo">
            </router-link>
        </header>

        <nav class="category-tab">
            <ul class="tab-list">
                <li class="item" v-for="(cat, i) in categories" :key="i" :class="{ active: i === activeCategory }"
                    @click="activeCategory = i">
                    {{ cat }}
                </li>
            </ul>
        </nav>

        <main class="room-content">
            <div class="room-grid">
                <div class="room-card" 
                    v-for="(item, i) in rooms" :key="i" 
                    @mouseenter="hoverIndex = i"
                    @mouseleave="hoverIndex = null">
                    <img :src="item.image" :alt="item.title" />
                    <div class="txt-wrap" v-if="hoverIndex === i">
                        <h3 class="title">{{ item.title }}</h3>
                        <p class="price">{{ item.price }} / 박</p>
                    </div>
                </div>
            </div>
        </main>

        <footer class="footer-section">
            <p>&copy; 2025 Airbnb Clone @CHA MINWOO</p>
        </footer>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const rooms = ref([]);
const hoverIndex = ref(null);
const categories = ['🔥 인기', '🌊 해변 근처', '🌇 도시 중심', '🏕 자연 속', '🛋 트렌디'];
const activeCategory = ref(0);

onMounted(async () => {
    try {
        const res = await fetch('/airbnb/data/room.json');
        rooms.value = await res.json();
    } catch (err) {
        console.error('데이터 로딩 오류:', err);
    }
})
</script>

<style scoped lang="scss">
@use '@/assets/styles/pages/airbnb';
</style>
