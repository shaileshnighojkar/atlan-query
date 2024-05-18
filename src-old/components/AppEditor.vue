<script setup lang="ts">
import { ref, shallowRef } from 'vue'

import VueMonacoEditor from '@guolao/vue-monaco-editor'

const MONACO_EDITOR_OPTIONS = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
  minimap: { enabled: false },
  fontSize: '14px'
}

const code = ref('SELECT * FROM users WHERE ID > 10;')
const editorRef = shallowRef()
const handleMount = (editor: typeof shallowRef) => {
  editorRef.value = editor
}
</script>

<template>
  <div class="app-editor">
    <VueMonacoEditor
      class="monaco-editor"
      v-model:value="code"
      language="sql"
      theme="vs-light"
      :options="MONACO_EDITOR_OPTIONS"
      @mount="handleMount"
    />
  </div>
</template>

<style lang="scss">
.app-editor {
  height: 200px;
  border-bottom: 1px solid var(--color-primary);
}
</style>
