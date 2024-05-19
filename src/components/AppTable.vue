<script setup lang="ts">
import { ref } from 'vue'
import { onMounted } from 'vue'

const props = defineProps({
  headers: Object,
  items: Array,
  loading: Boolean
})

// height
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
  <div class="app-table" :class="{ 'app-table-loading': loading }" ref="appTableRef">
    <div class="d-flex flex-column align-center" v-if="loading">
      <v-progress-circular model-value="20" indeterminate size="80" />
      <div class="mt-3">Fetching results...</div>
    </div>

    <v-data-table-virtual
      v-else
      :headers="props.headers"
      :items="props.items"
      :height="virtualTableHeight"
      fixed-header
      item-value="name"
    />
  </div>
</template>

<style lang="scss">
.app-table {
  flex: 1;

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
