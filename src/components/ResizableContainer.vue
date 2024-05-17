<script setup lang="ts">
import { ref } from 'vue'

const isResizing = ref(false)
const topHeight = ref(60)
const RESIZER_HEIGHT = 24

function onMouseDown(e: MouseEvent) {
  e.preventDefault()
  isResizing.value = true
  const container = (e.target as HTMLDivElement).parentElement
  container?.addEventListener('mousemove', onMouseMove)
}

function onMouseMove(e: MouseEvent) {
  e.preventDefault()
  topHeight.value = e.clientY - RESIZER_HEIGHT / 2
}

function onMouseUp(e: MouseEvent) {
  if (isResizing.value) {
    const container = e.currentTarget as HTMLDivElement
    container?.removeEventListener('mousemove', onMouseMove)
    isResizing.value = false
  }
}
</script>

<template>
  <div class="resizable-container" @mouseup.stop="onMouseUp">
    <div class="top-wrapper" :style="{ height: topHeight + 'px' }">
      <slot name="top"></slot>
    </div>
    <div class="resizer" :style="{ height: RESIZER_HEIGHT + 'px' }" @mousedown="onMouseDown"></div>
    <div class="bottom-wrapper">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<style lang="scss">
.resizable-container {
  display: flex;
  flex-direction: column;

  .top-wrapper {
  }

  .resizer {
    width: 100%;
    background: gray;
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

  .bottom-wrapper {
    flex-grow: 1;
  }
}
</style>
