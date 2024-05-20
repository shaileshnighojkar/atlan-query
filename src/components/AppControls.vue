<script setup lang="ts">
import { useResultStore } from '../store/result'

const emit = defineEmits(['runQueryClick'])
const resultStore = useResultStore()

const columns = resultStore.headers.map((h) => h.title)
</script>

<template>
  <div class="app-controls">
    <div>
      <div v-show="!resultStore.loading" class="app-controls-query">
        <span>Executed Query: </span>
        <span>{{ resultStore.query }}</span>
      </div>
    </div>

    <div class="app-controls-right">
      <!-- Total Rows -->
      <span class="app-controls-total-rows">Total rows: {{ resultStore.totalRows }}</span>

      <!-- Run Query -->
      <v-btn
        text="Run Query"
        color="primary"
        :disabled="resultStore.loading"
        @click="emit('runQueryClick')"
      />

      <!-- Select Columns -->
      <v-dialog max-width="500">
        <template #activator="{ props }">
          <v-btn v-bind="props" text="Select Columns" />
        </template>

        <template #default="{ isActive }">
          <v-card title="Select Columns">
            <v-card-text>
              <v-list height="280">
                <v-list-item v-for="column in columns" :key="column" density="compact" class="pa-0">
                  <template #prepend>
                    <v-checkbox
                      :model-value="true"
                      :label="column"
                      density="compact"
                      hide-details
                    />
                  </template>
                </v-list-item>
              </v-list>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text="Save" @click="isActive.value = false"></v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>

      <!-- Export -->
      <v-menu>
        <template #activator="{ props }">
          <v-btn v-bind="props"> Export </v-btn>
        </template>
        <v-list :items="['JSON', 'Excel', 'CSV']" />
      </v-menu>
    </div>
  </div>
</template>

<style lang="scss">
.app-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  padding: 8px 16px;

  .app-controls-query {
    font-size: 0.9rem;
    span:last-child {
      font-style: italic;
      font-weight: 500;
    }
  }

  .app-controls-right {
    display: flex;
    align-items: center;
    gap: 8px;

    .app-controls-total-rows {
      font-size: 0.9rem;
      margin-right: 12px;
    }
  }
}
</style>
