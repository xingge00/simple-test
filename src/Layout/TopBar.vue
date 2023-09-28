
<script setup>
import { initRouter } from '@/modules/index'
console.log(initRouter)
</script>

<template>
  <div class="app-top-bar">
    <router-link v-for="item in initRouter" :key="item.path" :to="item.path">
      {{ item.path }}
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.app-top-bar {
  background: linear-gradient(90deg, #358f80 0%, #67b99a 100.76%);
  a {
    display: inline-block;
    margin: 0 10px;
    padding: 16px;
    color: #fff;

  }
}
</style>
