<script setup lang="ts">
import { useLayoutStore } from '../store/layout'

const layoutStore = useLayoutStore()
</script>

<template>
  <v-app-bar class="pl-2 pr-4">
    <v-app-bar-nav-icon @click="layoutStore.isDrawerOpen = !layoutStore.isDrawerOpen" />
    <v-app-bar-title>Atlan Query</v-app-bar-title>
    <v-spacer />
    <v-btn variant="flat">Documentation</v-btn>
    <v-btn variant="flat">Pricing</v-btn>
    <v-btn variant="flat">About</v-btn>
  </v-app-bar>
</template>

<style lang="scss"></style>
