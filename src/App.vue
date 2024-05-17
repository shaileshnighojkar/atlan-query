<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppSidebar from './components/AppSidebar.vue'
</script>

<template>
  <AppHeader></AppHeader>
  <main>
    <AppSidebar></AppSidebar>
  </main>
</template>

<style lang="scss">
main {
  flex: 1;
}
</style>
