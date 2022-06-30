<template>
  <MainHeader/>
  <MainContent/>
</template>

<script>
import MainHeader from './components/main-header.vue'
import MainContent from './components/main-content.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
    MainContent,
  }
}
</script>

<style lang="scss">
@import './styles/common';
</style>

