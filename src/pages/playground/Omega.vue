<template>
    <div class="watch-shell omega">
        <div class="watch omega-dial">
            <!-- 브랜드 / 라벨 -->
            <div class="center-mark">
                <span class="omega-logo">Ω</span>
                <span class="brand">Globemaster</span>
                <span class="label">CO-AXIAL<br />MASTER CHRONOMETER</span>
                <span class="star">★</span>
            </div>

            <!-- 눈금 인덱스 -->
            <!-- 눈금 인덱스 -->
            <div class="tick minor" v-for="n in 60" :key="'minor' + n" :style="tickMinorStyle(n)" />


            <!-- 바늘 -->
            <div class="hand hour" ref="hour"></div>
            <div class="hand minute" ref="minute"></div>
            <div class="hand second" ref="second"></div>

            <!-- 날짜창 -->
            <div class="date-window">{{ date }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            date: new Date().getDate()
        }
    },
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
            this.date = now.getDate();

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
        tickMinorStyle(n) {
            return {
                transform: `rotate(${n * 6}deg) translateY(-142px)`
            };
        }
    }
}
</script>

<style scoped>
.watch-shell.omega {
    width: 380px;
    height: 380px;
    border-radius: 50%;
    padding: 10px;
    background:
        repeating-conic-gradient(from 0deg,
            #bbb 0deg 3deg,
            #ddd 3deg 6deg);
    box-shadow:
        inset 0 0 30px rgba(255, 255, 255, 0.15),
        inset 0 0 60px rgba(0, 0, 0, 0.2),
        0 6px 10px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
}


.watch.omega-dial {
    position: relative;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, #01304d 60%, #001624 90%, #000 100%);
    border-radius: 50%;
    overflow: hidden;
    box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.1);
}

.center-mark {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-family: 'Georgia', serif;
    color: #fff;
    font-size: 10px;
    z-index: 5;
}

.center-mark .omega-logo {
    font-size: 18px;
    display: block;
    margin-bottom: 2px;
}

.center-mark .brand {
    font-family: cursive;
    font-size: 13px;
    display: block;
    margin-bottom: 4px;
}

.center-mark .star {
    font-size: 12px;
    display: block;
    margin-top: 2px;
    color: gold;
}

.tick.major {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 18px;
    background: linear-gradient(135deg, #fff, #888);
    transform-origin: center -140px;
    border-radius: 1px;
    box-shadow: 0 0 2px #0006;
}

.tick.minor {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1px;
    height: 6px;
    background: #aaa;
    transform-origin: center -142px;
    opacity: 0.5;
}


.hand {
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform-origin: bottom;
    border-radius: 2px;
    box-shadow: inset 0 0 1px rgba(255, 255, 255, 0.5);
}

.hour {
    width: 6px;
    height: 70px;
    background: linear-gradient(to top, #999, #fff);
    z-index: 3;
    clip-path: polygon(50% 0%, 60% 10%, 60% 100%, 40% 100%, 40% 10%);
}

.minute {
    width: 4px;
    height: 100px;
    background: linear-gradient(to top, #ccc, #eee);
    z-index: 2;
    clip-path: polygon(50% 0%, 55% 10%, 55% 100%, 45% 100%, 45% 10%);
}

.second {
    width: 2px;
    height: 120px;
    background: #bbb;
    z-index: 1;
}

.date-window {
    position: absolute;
    bottom: 12%;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    color: #000;
    padding: 2px 6px;
    border-radius: 2px;
    font-size: 12px;
    box-shadow: 0 0 2px #000;
    font-family: monospace;
    z-index: 6;
}
</style>
