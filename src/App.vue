<script setup lang="ts">
import { ref } from 'vue'
import AppEditor from './components/AppEditor.vue'
import AppTable from './components/AppTable.vue'
import AppSidebar from './components/AppSidebar.vue'

const drawer: any = ref(false)
</script>

<template>
  <v-app id="inspire">
    <AppSidebar v-model="drawer" />

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Atlan Query</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <AppEditor></AppEditor>
      <AppTable></AppTable>
    </v-main>
  </v-app>
</template>

<style lang="scss"></style>
