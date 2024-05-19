<script setup lang="ts">
import { ref } from 'vue'
import AppEditor from './components/AppEditor.vue'
import AppTable from './components/AppTable.vue'
import AppControls from './components/AppControls.vue'
import AppSidebar from './components/AppSidebar.vue'
import sampleData from './data'

const drawer: any = ref(false)
const appEditorRef = ref()
const headers = ref<any[]>([])
const items = ref<any[]>([])
const loading = ref(false)

const onRunQueryClick = () => executeQuery(appEditorRef.value.getQuery())

async function executeQuery(query: string) {
  headers.value = []
  items.value = []
  loading.value = true

  // dummy wait - simulating network call
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const dataId = Object.keys(sampleData).reduce((result, dataId) => {
    return query.includes(dataId) ? dataId : result
  }, 'customers') as keyof typeof sampleData

  const data = sampleData[dataId]

  headers.value = data.headers
  items.value = data.items
  loading.value = false
}
</script>

<template>
  <v-app id="inspire">
    <AppSidebar v-model="drawer" />

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Atlan Query</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <AppEditor ref="appEditorRef" @run-query="executeQuery"></AppEditor>
      <AppControls :totalRows="items.length" @run-query-click="onRunQueryClick"></AppControls>
      <AppTable :headers="headers" :items="items" :loading="loading"></AppTable>
    </v-main>
  </v-app>
</template>

<style lang="scss">
.v-main {
  display: flex;
  flex-direction: column;
}
</style>
