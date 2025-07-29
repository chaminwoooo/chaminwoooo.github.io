<template>
    <section ref="toggleControl" :class="{ dark: isDark }" class="light-section">
        
        <button type="button" id="switch" @click="toggleDark">
            {{isDark ? '🌝' : '🌞' }}
            <span class="click-me">Click Me !</span>
        </button>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const isDark = ref(false);

function toggleDark() {
    isDark.value = !isDark.value
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/mixins' as *;

:root {
    --color-bg:#fff3bf;
    --color-txt: #212112;
}

.light-section {
    width: 100vw;
    height: 100vh;
    @include flexBox;
    background-color: var(--color-bg);
    color: var(--color-text);
    transition: background-color 0.6s ease-in-out;

    &.dark {
        --color-bg: #333;
        --color-txt: #fff3bf;
    }
}

#switch {
    @include inlineFlex;
    flex-direction: column;
    cursor: pointer;
    @include font-48;
}

.click-me {
    margin-top: 1.6rem;
    @include font-32(600);
    color: var(--color-txt);
    transition: color 0.6s ease-in-out;
}
</style>
