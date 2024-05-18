<script setup lang="ts">
import { ref } from 'vue'
import AppResultTable from './AppResultTable.vue'

const currentQuery = ref('SELECT * FROM users WHERE ID > 10;')
</script>

<template>
  <div class="app-result">
    <div class="app-result-header">
      <div style="flex: 1"></div>
      <button class="result-btn-copy">Show current query</button>
      <div>Total rows: 224</div>
      <button class="result-btn-export">Export Data</button>
    </div>
    <AppResultTable></AppResultTable>
  </div>
</template>

<style lang="scss">
.app-result {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 12px 20px;
  max-height: 100%;
  width: 100%;

  .app-result-header {
    display: flex;
    align-items: center;
    gap: 10px;

    .current-query {
      font-style: italic;
      flex: 1;
    }

    button {
      padding: 8px 16px;
      border: 0px;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        opacity: 0.6;
      }
      &:active {
        opacity: 0.4;
      }
    }
  }
}
</style>
