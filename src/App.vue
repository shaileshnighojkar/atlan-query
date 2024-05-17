<script setup lang="ts">
import { ref } from 'vue'
import ResizableContainer from './components/ResizableContainer.vue'
import AppEditor from './components/AppEditor.vue'
import AppResult from './components/AppResult.vue'
</script>

<template>
  <ResizableContainer>
    <template #top>
      <AppEditor></AppEditor>
    </template>
    <template #bottom>
      <AppResult>showing result</AppResult>
    </template>
  </ResizableContainer>
</template>

<style lang="scss">
.resizable-container {
  max-width: 1280px;
  margin: 0px auto;
  height: 100vh;
}
</style>
