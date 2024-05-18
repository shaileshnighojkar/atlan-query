<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppSidebar from './components/AppSidebar.vue'
import AppEditor from './components/AppEditor.vue'
import AppResult from './components/AppResult/AppResult.vue'
</script>

<template>
  <AppHeader></AppHeader>
  <main>
    <AppSidebar></AppSidebar>
    <div class="app-container">
      <AppEditor></AppEditor>
      <AppResult></AppResult>
    </div>
  </main>
</template>

<style lang="scss">
main {
  flex: 1;
  display: flex;
  max-width: 100%;

  .app-container {
    width: calc(100% - 240px);
    height: calc(100% - 600px);
  }
}
</style>
