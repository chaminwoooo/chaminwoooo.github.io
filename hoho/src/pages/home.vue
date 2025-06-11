<template>
  <main class="main">
    <section class="section">
      <h2 class="section-title">브랜드 사이트</h2>
      <div class="card-grid">
        <router-link to="/brand-a" class="card">
          <img src="@/assets/images/brand-a.jpg" alt="Brand A" class="card-image" />
          <div class="card-title">Brand A</div>
        </router-link>
        <router-link to="/brand-b" class="card">
          <img src="@/assets/images/brand-b.jpg" alt="Brand B" class="card-image" />
          <div class="card-title">Brand B</div>
        </router-link>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">기타 프로젝트</h2>
      <div class="card-grid">
        <router-link to="/tool" class="card">
          <img src="@/assets/images/tool.jpg" alt="Tool" class="card-image" />
          <div class="card-title">Small Tool</div>
        </router-link>
        <router-link to="/js-playground" class="card">
          <img src="@/assets/images/tool.jpg" alt="Tool" class="card-image" />
          <div class="card-title">JS PlayGround</div>
        </router-link>
      </div>
    </section>
  </main>
</template>

<script setup>
// 특별한 로직은 현재 없음
</script>

<style scoped>
/* 필요 시 로컬 스타일 정의 */
</style>
