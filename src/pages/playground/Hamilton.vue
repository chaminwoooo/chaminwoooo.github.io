<template>
    <div class="watch-shell">
        <div class="watch hamilton">
            <!-- 중앙 브랜드 텍스트 -->
            <div class="center-mark">
                <span class="brand">HAMILTON</span>
                <span class="label">MECHANICAL</span>
            </div>

            <!-- 12시 방향 트라이앵글 인덱스 -->
            <div class="triangle" />

            <!-- 눈금 + 숫자 인덱스 -->
            <div class="tick" v-for="n in 60" :key="n" :style="tickStyle(n)"></div>
            <div class="number" v-for="n in 12" :key="'num' + n" :style="numberStyle(n)">
                {{ n === 12 ? 12 : n }}
            </div>

            <!-- 바늘 -->
            <div class="hand hour" ref="hour"></div>
            <div class="hand minute" ref="minute"></div>
            <div class="hand second" ref="second"></div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.updateClock();
        this.timer = setInterval(this.updateClock, 1000 / 60);
    },
    beforeUnmount() {
        clearInterval(this.timer);
    },
    methods: {
        updateClock() {
            const now = new Date();
            const h = now.getHours();
            const m = now.getMinutes();
            const s = now.getSeconds();
            const ms = now.getMilliseconds();

            const preciseSecond = s + ms / 1000;
            const preciseMinute = m + preciseSecond / 60;
            const preciseHour = h % 12 + preciseMinute / 60;

            if (this.$refs.hour)
                this.$refs.hour.style.transform = `rotate(${preciseHour * 30}deg)`;
            if (this.$refs.minute)
                this.$refs.minute.style.transform = `rotate(${preciseMinute * 6}deg)`;
            if (this.$refs.second)
                this.$refs.second.style.transform = `rotate(${preciseSecond * 6}deg)`;
        },
        tickStyle(n) {
            return {
                transform: `rotate(${n * 6}deg) translateY(-140px)`
            };
        },
        numberStyle(n) {
            return {
                transform: `rotate(${n * 30}deg) translateY(-110px) rotate(${-n * 30}deg)`
            };
        }
    }
};
</script>

<style scoped>
.watch-shell {
    position: relative;
    width: 360px;
    height: 400px;
    background: #ccc;
    border-radius: 35% / 25%;
    box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
}

.watch.hamilton {
    position: relative;
    width: 300px;
    height: 300px;
    border: 6px solid #444;
    border-radius: 50%;
    background: radial-gradient(#fefefe, #e5e5e5);
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 1;
}

.center-mark {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 5;
}

.center-mark .brand {
    display: block;
    font-weight: bold;
    font-size: 13px;
    letter-spacing: 1.2px;
    color: #222;
    font-family: 'Arial', sans-serif;
    margin-bottom: 2px;
}

.center-mark .label {
    font-size: 10px;
    color: #444;
    letter-spacing: 1px;
}

.hand {
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform-origin: bottom;
    border-radius: 2px;
}

.hour {
    width: 6px;
    height: 70px;
    background: #111;
    z-index: 3;
}

.minute {
    width: 4px;
    height: 100px;
    background: #111;
    z-index: 2;
}

.second {
    width: 2px;
    height: 120px;
    background: red;
    z-index: 1;
}

.tick {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    height: 8px;
    background: #555;
    transform-origin: center -140px;
}

.number {
    position: absolute;
    top: 50%;
    left: 50%;
    font-weight: bold;
    font-size: 16px;
    color: #000;
    transform-origin: center center;
    font-family: 'Arial', sans-serif;
}

.triangle {
    position: absolute;
    top: 18px;
    left: 50%;
    transform: translateX(-50%) rotate(180deg);
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 10px solid #c2d154;
    z-index: 10;
}
</style>