<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isResizing = ref(false)
const topHeight = ref(100)
const bottomHeight = ref(100)
const RESIZER_HEIGHT = 14

function onMouseDown(e: MouseEvent) {
  e.preventDefault()
  isResizing.value = true
  const container = (e.target as HTMLDivElement).parentElement
  container?.addEventListener('mousemove', onMouseMove)
}

function onMouseMove(e: MouseEvent) {
  e.preventDefault()
  setTopAndBottomSectionHeight(e.clientY)
}

function onMouseUpOrLeave(e: MouseEvent) {
  if (isResizing.value) {
    const container = e.currentTarget as HTMLDivElement
    container?.removeEventListener('mousemove', onMouseMove)
    isResizing.value = false
  }
}

function setTopAndBottomSectionHeight(clientY: number) {
  topHeight.value = clientY - RESIZER_HEIGHT / 2
  bottomHeight.value = window.innerHeight - topHeight.value - RESIZER_HEIGHT
}

onMounted(() => setTopAndBottomSectionHeight(200))
</script>

<template>
  <div class="resizable-container" @mouseup="onMouseUpOrLeave" @mouseleave="onMouseUpOrLeave">
    <div class="top-wrapper" :style="{ height: topHeight + 'px' }">
      <slot name="top"></slot>
    </div>
    <div class="resizer" :style="{ height: RESIZER_HEIGHT + 'px' }" @mousedown="onMouseDown"></div>
    <div class="bottom-wrapper" :style="{ height: bottomHeight + 'px' }">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<style lang="scss">
.resizable-container {
  .resizer {
    width: 100%;
    background: gray;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    &::before {
      content: '';
      width: 64px;
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
}
</style>
