<script setup lang="ts">
import { ref } from 'vue'
import sampleData from '../data'
import { useLayoutStore } from '../store/layout'

const layoutStore = useLayoutStore()
const tab = ref('one')

let idRunner = 1

const dataIds = Object.keys(sampleData) as (keyof typeof sampleData)[]
const allTableSchema = dataIds.map((dataId) => ({
  id: idRunner++,
  title: dataId,
  children: sampleData[dataId].headers.map((header) => ({
    id: idRunner++,
    title: header.key
  }))
}))

const sqlFiles = [
  {
    title: 'test',
    folder: true
  },
  ...Object.keys(sampleData).map((dataId) => ({
    title: dataId + '.sql',
    folder: false
  }))
]
</script>

<template>
  <v-navigation-drawer class="app-sidebar" v-model="layoutStore.isDrawerOpen">
    <v-card elevation="0">
      <v-tabs v-model="tab" grow>
        <v-tab value="one">Schema</v-tab>
        <v-tab value="two">Files</v-tab>
      </v-tabs>
      <v-card-text class="pa-0">
        <v-tabs-window class="app-sidebar-window" v-model="tab">
          <v-tabs-window-item value="one">
            <v-treeview class="schema-treeview" :items="allTableSchema" density="compact" />
          </v-tabs-window-item>
          <v-tabs-window-item value="two">
            <v-treeview :items="sqlFiles" density="compact">
              <template #prepend="{ item }">
                <v-icon>{{ item.folder ? 'mdi-folder' : 'mdi-file-document-outline' }}</v-icon>
              </template>
            </v-treeview>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </v-card>
  </v-navigation-drawer>
</template>

<style lang="scss">
.app-sidebar {
  .app-sidebar-window {
    padding: 24px 0px;
  }

  .schema-treeview {
    .v-treeview-item {
      .v-list-item-title {
        text-transform: capitalize;
      }
    }
  }
}
</style>
