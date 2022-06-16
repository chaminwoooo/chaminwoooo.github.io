<template>
    <main>
        <AboutMe/>
        <MyWorks/>
        <MyCareer/>
        <MyPlayGround/>
    </main>
</template>


<script>
import AboutMe from './main-about-me.vue'
import MyWorks from './main-works.vue'
import MyCareer from './main-career.vue'
import MyPlayGround from './main-playground.vue'


export default {
  name: "MainContent",
  components: {
    AboutMe,
    MyWorks,
    MyCareer,
    MyPlayGround,
  }
}
</script>

<style lang="scss">
@import '../styles/MainContent';
</style>