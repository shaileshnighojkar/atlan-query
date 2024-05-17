<script setup lang="ts">
import { ref } from 'vue'
import ResizableContainer from './components/ResizableContainer.vue'
</script>

<template>
  <ResizableContainer>
    <template #top>top</template>
    <template #bottom>bottom</template>
  </ResizableContainer>
</template>

<style lang="scss">
.resizable-container {
  max-width: 1280px;
  margin: 0px auto;
  height: 100vh;
}
</style>
