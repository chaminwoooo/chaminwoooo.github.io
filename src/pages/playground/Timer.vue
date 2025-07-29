<template>
    <section class="timer-section">
        <p class="timer-txt-wrap">
            <span class="timer-txt">
                <em>{{ countdownText }}</em>남음
                <span class="glitch-txt"><em>{{ countdownText }}</em>남음</span>
            </span>
        </p>
    </section>
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

    countdownText.value = `${d}일 ${pad(h)}:${pad(m)}:${pad(s)}`;
};

onMounted(() => {
    updateCountdown(); // 초기값 계산
    timer = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
    clearInterval(timer);
});
</script>


<style lang="scss" scoped>
@use '@/assets/styles/mixins' as *;
$move1: inset(50% 50% 50% 50%);
$move2: inset(31% 0 40% 0);
$move3: inset(39% 0 15% 0);
$move4: inset(45% 0 40% 0);
$move5: inset(45% 0 6% 0);
$move6: inset(14% 0 61% 0);

@keyframes aniGlitch {
    0%   { clip-path: $move1; transform: translate(0, -1px); }
    10%  { clip-path: $move2; transform: translate(-1px, 1px); }
    20%  { clip-path: $move3; transform: translate(1px, 0); }
    30%  { clip-path: $move4; transform: translate(-1px, 1px); }
    40%  { clip-path: $move5; transform: translate(1px, -1px); }
    50%  { clip-path: $move6; transform: translate(-1px, 1px); }
    60%  { clip-path: $move1; transform: translate(1px, -1px); }
    70%  { clip-path: $move3; transform: translate(-1px, 1px); }
    80%  { clip-path: $move2; transform: translate(1px, -1px); }
    90%  { clip-path: $move4; transform: translate(-1px, 1px); }
    100% { clip-path: $move1; transform: translate(0, 0); }
}


.timer-section {
    @include flexBox;
    width: 100vw;
    height: 100vh;
    background-color: #212121;
    overflow: hidden;
}

.timer-txt-wrap {
    position: relative;
    padding: 1.6rem;
    border-radius: 1.6rem;
    em {
        display: inline-block;
        width: 24rem;
    }
    &:hover {
        border: 1px solid rgb(0, 255, 213);
        text-shadow: -1px -1px 0px #1df2f0, 1px 1px 0px #E94BE8;
        box-shadow: 0px 10px 10px -10px rgb(0, 255, 213);
        .glitch-txt {
            opacity: 1;
            animation: aniGlitch 1s steps(2, end) infinite;
            text-shadow: -3px -3px 0px #1df2f0, 3px 3px 0px #E94BE8;
            border: 3px solid rgb(0, 255, 213);
        }
    }
}

.timer-txt {
    @include font-32(600);
    color: #fff;
    text-align: center;
}

.glitch-txt {
    position: absolute;
    inset: 0;
    color: #fff;
    pointer-events: none;
    opacity: 0;
    clip-path: $move1;
    text-shadow: -2px -2px 0 #1df2f0, 2px 2px 0 #E94BE8;
    border: 1px solid rgba(0, 255, 213, 0.6);
    transition: opacity 0.2s ease;
}


</style>
