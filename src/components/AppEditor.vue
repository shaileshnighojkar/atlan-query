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
  <VueMonacoEditor
    class="app-editor"
    v-model:value="code"
    language="sql"
    theme="vs-light"
    :options="MONACO_EDITOR_OPTIONS"
    @mount="handleMount"
  />
</template>

<style lang="scss">
.app-editor {
  height: 100%;
  padding-top: 20px;
}
</style>
