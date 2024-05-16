<script setup lang="ts">
import { onMounted, ref, shallowRef } from 'vue'
import AppResizer from './AppResizer.vue'
import VueMonacoEditor from '@guolao/vue-monaco-editor'

const editorHeight = ref(120)
const MONACO_EDITOR_OPTIONS = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
  minimap: { enabled: false }
}

const code = ref('SELECT * FROM users WHERE ID > 10;')
const editorRef = shallowRef()
const handleMount = (editor: typeof shallowRef) => {
  editorRef.value = editor
}

function onHeightChange(height: number) {
  editorHeight.value = height
}
</script>

<template>
  <div class="app-editor" :style="{ height: editorHeight + 'px' }">
    <div class="app-editor-text">
      <VueMonacoEditor
        v-model:value="code"
        language="sql"
        theme="vs-dark"
        :options="MONACO_EDITOR_OPTIONS"
        @mount="handleMount"
      />
    </div>
    <AppResizer @heightChange="onHeightChange" />
  </div>
</template>

<style lang="scss">
.app-editor {
  background: pink;
  display: flex;
  flex-direction: column;

  .app-editor-text {
    flex-grow: 1;
  }
}
</style>
