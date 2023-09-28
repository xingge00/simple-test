
<script setup>
import TopBar from './Layout/TopBar.vue'
</script>

<template>
  <div class="app-container">
    <TopBar></TopBar>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.app-container {
  width: 100%;
  height: 100vh;

}
</style>
