<template>
  <MainHeader/>
  <MainNav/>
  <MainContent/>
</template>

<script>
import MainHeader from './components/main-header.vue'
import MainNav from './components/main-nav.vue'
import MainContent from './components/main-content.vue'

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

