<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import { KeyMod, KeyCode } from 'monaco-editor'
import VueMonacoEditor from '@guolao/vue-monaco-editor'

const emit = defineEmits(['runQuery'])

const MONACO_EDITOR_OPTIONS = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
  minimap: { enabled: false },
  fontSize: 14
}

const SAMPLE_CODE = `/* Select query and then press Ctrl+Enter (Windows) or Cmd+Enter (Mac) to run the selected query */

SELECT * FROM customers WHERE ID > 10;
SELECT * FROM orders WHERE ID > 10;
SELECT * FROM products WHERE ID > 10;
SELECT * FROM boats;`

const code = ref(SAMPLE_CODE)
const editorRef = shallowRef()
const handleMount = (editor: any) => {
  editorRef.value = editor
  editor.addCommand(KeyMod.CtrlCmd | KeyCode.Enter, () => {
    emit('runQuery', getQuery())
  })
}

function getQuery() {
  const model = editorRef.value.getModel()
  const selection = editorRef.value.getSelection()

  if (
    selection.startLineNumber == selection.endLineNumber &&
    selection.startColumn == selection.endColumn
  ) {
    return model.getLineContent(selection.startLineNumber)
  }
  return model.getValueInRange(selection)
}

defineExpose({ getQuery })
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
  height: 200px;
  border-bottom: 1px solid #c0c0c0;
}
</style>
