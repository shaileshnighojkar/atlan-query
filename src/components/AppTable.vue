<script setup lang="ts">
import { ref } from 'vue'
import { onMounted } from 'vue'
import { useResultStore } from '../store/result'

const resultStore = useResultStore()
const appTableRef = ref<HTMLDivElement>()
const virtualTableHeight = ref(300)

onMounted(() => {
  if (appTableRef.value) {
    const bottomPadding = 18
    virtualTableHeight.value = appTableRef.value.clientHeight - bottomPadding
  }
})
</script>

<template>
  <div class="app-table" :class="{ 'app-table-loading': resultStore.loading }" ref="appTableRef">
    <div v-if="resultStore.loading" class="d-flex flex-column align-center" style="gap: 12px">
      <v-progress-circular model-value="20" indeterminate size="80" />
      <div class="mt-3">Fetching results...</div>
      <v-btn>Cancel</v-btn>
    </div>

    <v-data-table-virtual
      v-else
      :headers="resultStore.headers"
      :items="resultStore.items"
      :height="virtualTableHeight"
      fixed-header
      item-value="name"
    />
  </div>
</template>

<style lang="scss">
.app-table {
  height: 100%;

  &.app-table-loading {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .v-data-table {
    overflow-x: auto;
    border-bottom: 1px solid #bdb9b9;
  }
}
</style>
