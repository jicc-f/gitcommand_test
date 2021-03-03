<template>
  <div id="app">
    
         <router-view></router-view>

   <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from '../src/components/content/mainTabBar/MainTabBar.vue'

export default {
  name: 'app',
  components: {
    MainTabBar
  }
}
</script>

<style>
@import '../src/assets/css/base.css'
</style>
