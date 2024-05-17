<script setup lang="ts"></script>

<template>
  <header>
    <h1>Atlan Query</h1>
    <ul>
      <li>Documentation</li>
      <li>About</li>
    </ul>
  </header>
</template>

<style lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  height: 60px;
  background: var(--color-primary);
  color: white;
  padding: 0px 24px;

  ul {
    list-style: none;
    display: flex;
    gap: 32px;
  }
}
</style>
