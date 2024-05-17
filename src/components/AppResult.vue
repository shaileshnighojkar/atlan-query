<script setup lang="ts">
import { ref } from 'vue'
import ResultTable from './ResultTable.vue'

const currentQuery = ref('SELECT * FROM users WHERE ID > 10;')
</script>

<template>
  <div class="app-result">
    <div class="app-result-header">
      <h3>Current Query:</h3>
      <div class="current-query">{{ currentQuery }}</div>
      <button class="result-btn-copy">Copy Query</button>
      <div>Total rows: 224</div>
      <button class="result-btn-export">Export Data</button>
    </div>

    <div class="test-table">
      <div>dkasjdhkashdjkashdhasjdhkaj</div>
      <div>dkasjdhkashdjkashdhasjdhkaj</div>
      <div>dkasjdhkashdjkashdhasjdhkaj</div>
      <div>dkasjdhkashdjkashdhasjdhkaj</div>
      <div>dkasjdhkashdjkashdhasjdhkaj</div>
      <div>dkasjdhkashdjkashdhasjdhkaj</div>
      <div>dkasjdhkashdjkashdhasjdhkaj</div>
      <div>dkasjdhkashdjkashdhasjdhkaj</div>
      <div>dkasjdhkashdjkashdhasjdhkaj</div>
      <div>dkasjdhkashdjkashdhasjdhkaj</div>
      <div>dkasjdhkashdjkashdhasjdhkaj</div>
      <div>dkasjdhkashdjkashdhasjdhkaj</div>
    </div>

    <!-- <ResultTable></ResultTable> -->
  </div>
</template>

<style lang="scss">
.test-table {
  display: flex;
  gap: 20px;
  background: lightsalmon;
  padding: 20px 0px;
}

.app-result {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  height: 100%;

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
