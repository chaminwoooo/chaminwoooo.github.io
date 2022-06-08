<template>
  <MainHeader/>
  <MainNav/>
  <MainContent/>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import MainNav from './components/MainNav.vue'
import MainContent from './components/MainContent.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
    MainNav,
    MainContent,
  }
}
</script>

<style lang="scss">
@import './styles/common';
</style>

