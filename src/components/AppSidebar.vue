<script setup lang="ts">
import { ref } from 'vue'

const drawer = defineModel<boolean>()
const tab = ref('one')
</script>

<template>
  <v-navigation-drawer v-model="drawer">
    <v-card>
      <v-tabs v-model="tab" density="compact" :show-arrows="false">
        <v-tab value="one">Tables</v-tab>
        <v-tab value="two">Files</v-tab>
      </v-tabs>

      <v-card-text>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="one"> Showing all available tables </v-tabs-window-item>
          <v-tabs-window-item value="two"> Showing all query files </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </v-card>
  </v-navigation-drawer>
</template>

<style lang="scss"></style>
