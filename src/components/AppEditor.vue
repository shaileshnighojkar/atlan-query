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

const code = ref('SELECT * FROM users WHERE ID > 10;\n\n\n\n\n\n\n\n\n\n')
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
  padding: 12px 24px 12px 0px;
  height: 160px;
  border-bottom: 1px solid #c0c0c0;
}
</style>
