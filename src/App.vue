<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppEditor from './components/AppEditor.vue'
import AppTable from './components/AppTable.vue'
import AppControls from './components/AppControls.vue'
import AppSidebar from './components/AppSidebar.vue'
import sampleData from './data'
import { useResultStore } from './store/result'

const appEditorRef = ref()
const resultStore = useResultStore()

async function executeQuery(query: string) {
  resultStore.query = query
  resultStore.headers = []
  resultStore.items = []
  resultStore.loading = true

  // dummy wait - simulating network call
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const dataId = Object.keys(sampleData).reduce((result, dataId) => {
    return query.includes(dataId) ? dataId : result
  }, 'customers') as keyof typeof sampleData

  const data = sampleData[dataId]

  resultStore.headers = data.headers
  resultStore.items = data.items
  resultStore.loading = false
}
</script>

<template>
  <v-app>
    <AppHeader></AppHeader>
    <v-main>
      <AppSidebar />
      <AppEditor ref="appEditorRef" @run-query="executeQuery" />
      <AppControls @run-query-click="() => executeQuery(appEditorRef.getQuery())" />
      <AppTable />
    </v-main>
  </v-app>
</template>

<style lang="scss">
.v-main {
  display: flex;
  flex-direction: column;
}
</style>
