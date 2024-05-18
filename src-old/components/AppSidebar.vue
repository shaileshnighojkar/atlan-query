<script setup lang="ts">
import { ref } from 'vue'

const files = [
  'categories.sql',
  'customers.sql',
  'employee_territories.sql',
  'employees.sql',
  'order_details.sql',
  'orders.sql',
  'products.sql',
  'regions.sql',
  'shippers.sql',
  'suppliers.sql',
  'territories.sql'
]

const activeFile = ref(files[0])
</script>

<template>
  <aside class="app-sidebar">
    <div class="app-sidebar-title">
      <h2>Query files</h2>
      <a href="#">Help?</a>
    </div>
    <ul>
      <li
        v-for="file in files"
        :key="file"
        :class="{ active: file === activeFile }"
        @click="activeFile = file"
      >
        {{ file }}
      </li>
    </ul>
  </aside>
</template>

<style lang="scss">
aside {
  width: 240px;
  height: 100%;
  border-right: 1px solid;
  flex-shrink: 0;

  .app-sidebar-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px 32px 20px;

    a {
      font-size: 14px;
    }
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 400;
  }

  ul {
    list-style: none;

    li {
      padding: 8px 20px;
      font-style: italic;
      cursor: pointer;
      transition: all 100ms;

      &.active {
        background: var(--color-primary);
        color: white;
      }
    }
  }
}
</style>
