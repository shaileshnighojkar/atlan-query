<script setup lang="ts">
import { onMounted, ref } from 'vue'

const emit = defineEmits(['heightChange'])
const resizerRef = ref<HTMLDivElement | null>(null)

const isResizing = ref(false)

function onMouseMove(e: MouseEvent) {
  if (isResizing.value) {
    const newHeight = e.clientY + 7
    emit('heightChange', newHeight)
  }
}

onMounted(() => {
  emit('heightChange', 120)
})
</script>

<template>
  <div
    class="app-resizer"
    ref="resizerRef"
    @mousedown="isResizing = true"
    @mousemove="onMouseMove"
    @mouseup="isResizing = false"
    @blur="isResizing = false"
  />
</template>

<style lang="scss">
.app-resizer {
  width: 100%;
  height: 14px;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    width: 44px;
    height: 5px;
    background: white;
    border-radius: 100vw;
  }

  &:hover {
    opacity: 0.7;
    cursor: row-resize;
    transition: all 300ms;
  }
}
</style>
