<script setup lang="ts">
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
      <AppResult></AppResult>
    </template>
  </ResizableContainer>
</template>

<style lang="scss">
.resizable-container {
  max-width: 1280px;
  margin: 0px auto;
  height: 100vh;
  border: 1px solid #353535;
}
</style>
