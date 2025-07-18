<template>
    <span>{{ countdownText }}</span>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// 표시할 텍스트 상태
const countdownText = ref("계산 중...");

// 목표 날짜 설정
const dDay = new Date("2025-11-30T23:23:59");

// 타이머 ID 저장용
let timer = null;

const updateCountdown = () => {
    const now = new Date();
    const diff = dDay - now;

    if (diff <= 0) {
        countdownText.value = "END";
        clearInterval(timer);
        return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    const pad = (n) => String(n).padStart(2, "0");

    countdownText.value = `${d}일 ${pad(h)}:${pad(m)}:${pad(s)} 남음`;
};

onMounted(() => {
    updateCountdown(); // 초기값 계산
    timer = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
    clearInterval(timer);
});
</script>
