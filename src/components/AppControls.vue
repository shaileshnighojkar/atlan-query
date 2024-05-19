<script setup lang="ts">
const emit = defineEmits(['runQueryClick'])

defineProps<{ totalRows: number }>()
</script>

<template>
  <div class="app-controls">
    <div>Total rows: {{ totalRows }}</div>
    <v-btn color="primary" @click="emit('runQueryClick')">Run Query</v-btn>
  </div>
</template>

<style lang="scss">
.app-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 20px;
}
</style>
