<template>
    <div class="timer-wrap">
        <span class="d-day">D-5</span>
        <p class="cta-timer"></p>
    </div>
</template>

<script>
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        let secondsLeft = 3600;
        function Timer(sec) {
            const h = String(Math.floor(sec / 3600)).padStart(2, '0');
            const m = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
            const s = String(sec % 60).padStart(2, '0');
            return `${h}:${m}:${s}`;
        }

        const timerEl = document.querySelector('.cta-timer');
        const interval = setInterval(() => {
            if (secondsLeft <= 0) {
                clearInterval(interval);
                return
            }
            secondsLeft--;
            timerEl.textContent = Timer(secondsLeft);
        }, 1000)
    }, 1000);
})
</script>