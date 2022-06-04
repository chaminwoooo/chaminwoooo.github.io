@import '@/styles/header.scss';

<template>
  <MainHeader/>
</template>

<script>
import MainHeader from './components/MainHeader.vue'

export default {
  name: 'App',
  components: {
    MainHeader
  }
}
</script>

<style lang="sass">
@import url(@/);
</style>

