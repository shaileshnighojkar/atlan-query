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

const SAMPLE_CODE = `/* select query and then press cmd+enter to run the selected query */

SELECT * FROM users WHERE ID > 10;





`

const code = ref(SAMPLE_CODE)
const editorRef = shallowRef()
const handleMount = (editor: any) => {
  editorRef.value = editor

  editor.onKeyDown((event: KeyboardEvent) => {
    if ((event.metaKey || event.ctrlKey) && event.code === 'Enter') {
      const selectedCode = editor.getModel().getValueInRange(editor.getSelection())
      console.log(selectedCode)
    }
  })
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
