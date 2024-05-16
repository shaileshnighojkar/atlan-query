<script setup lang="ts">
import AppEditor from './components/AppEditor.vue'
import AppResult from './components/AppResult.vue'
</script>

<template>
  <div class="container">
    <AppEditor />
    <AppResult />
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  max-width: 680px;
  margin: 0px auto;
  height: 100vh;
}
</style>
