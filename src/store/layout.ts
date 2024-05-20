import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLayoutStore = defineStore('layout', () => {
  const isDrawerOpen = ref(true)

  return {
    isDrawerOpen
  }
})
