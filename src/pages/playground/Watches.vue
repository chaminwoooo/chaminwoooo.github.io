<template>
    <div class="watches">
        <h2>🕰 내 시계들</h2>
        <Hamilton />
        <Omega />
    </div>
</template>

<script>
import Hamilton from './Hamilton.vue'
import Omega from './Omega.vue'

export default {
    components: {
        Hamilton,
        Omega
    }
}
</script>

<style scoped>
.watches {
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
}
</style>
