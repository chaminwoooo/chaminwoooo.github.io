<template>
  <header id="mainHeader">
    <h1 class="header-logo">
      <span class="hidden">로고</span>
      <figure class="header-logo__icon" v-for="logo in logos" :key="logo">
        <a href="./index.html">
          <img :src="require(`@/images/${logo.img}`)" :alt="logo.alt" />
        </a>
      </figure>
    </h1>
    <!-- 작업 후 업데이트 날짜 수정할 것-->
    <em class="header-date">Updated. Jun 16</em>

    <!-- 실시간으로 작동하는시계가 있는것에 의미 ? 플레이 그라운드로 빼도 될 것 같아서 -->
  </header>
</template>

<script>
export default {
  name: "MainHeader",
  data() {
    return {
      logos: [
        { img: "up-c.svg", alt: "C" },
        { img: "up-h.svg", alt: "H" },
        { img: "up-a.svg", alt: "A" },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../styles/Header";
</style>