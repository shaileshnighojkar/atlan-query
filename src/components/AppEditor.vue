<script setup lang="ts">
import { onMounted, ref } from 'vue'
import AppResizer from './AppResizer.vue'

const editorHeight = ref(120)

function onHeightChange(height: number) {
  editorHeight.value = height
}
</script>

<template>
  <div class="app-editor" :style="{ height: editorHeight + 'px' }">
    <div class="app-editor-text"></div>
    <AppResizer @heightChange="onHeightChange" />
  </div>
</template>

<style lang="scss">
.app-editor {
  background: pink;
  display: flex;
  flex-direction: column;

  .app-editor-text {
    background: red;
    flex-grow: 1;
  }
}
</style>
