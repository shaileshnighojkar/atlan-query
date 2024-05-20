import { defineStore } from 'pinia'
import { ref, shallowRef } from 'vue'

export const useResultStore = defineStore('result', () => {
  const query = ref('')
  const headers = shallowRef<any[]>([])
  const items = shallowRef<any[]>([])
  const totalRows = ref(0)
  const loading = ref(false)

  return {
    query,
    headers,
    items,
    totalRows,
    loading
  }
})
