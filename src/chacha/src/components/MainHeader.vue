<template>
    <header id="MainHeader">
      <h1 class="logo">
        <span class="hidden">로고</span>
        <a href="./index.html">
          <span><img src="@/images/up-c.svg" alt="C" /></span>
          <span><img src="@/images/up-h.svg" alt="H" /></span>
          <span><img src="@/images/up-a.svg" alt="A" /></span>
        </a>
      </h1>
      <div class="copy info"><span>Updated. Jun 05</span></div>
      <!-- 작업 후 업데이트 날짜 수정할 것-->
      <div class="copy clock">
        <span>Seoul : </span>
        <span id="clock"></span>
      </div>
    </header>
</template>

<script>
export default {
  name: "MainHeader",
};
</script>

<style lang="scss">
@import '../styles/Header';
</style>