<script setup lang="ts">
import customers from '../../data/customers.js'

const columns = [
  { name: 'Customer Id', key: 'customerID', style: { width: '200px' } },
  { name: 'Company Name', key: 'companyName', style: { width: '200px' } },
  { name: 'Contact Name', key: 'contactName', style: { width: '200px' } },
  { name: 'Contact Title', key: 'contactTitle', style: { width: '200px' } },
  { name: 'Address', key: 'address', style: { width: '200px' } },
  { name: 'City', key: 'city', style: { width: '200px' } },
  { name: 'Region', key: 'region', style: { width: '200px' } },
  { name: 'Postal Code', key: 'postalCode', style: { width: '200px' } },
  { name: 'Country', key: 'country', style: { width: '200px' } },
  { name: 'Phone', key: 'phone', style: { width: '200px' } },
  { name: 'Tax', key: 'tax', style: { width: '200px' } }
]
</script>

<template>
  <div class="app-result-table">
    <table>
      <thead>
        <tr>
          <th v-for="column in columns" :key="column.key" :style="column.style">
            {{ column.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.customerID">
          <td
            v-for="column in columns"
            :key="column.key"
            :style="column.style"
            :title="customer[column.key]"
          >
            {{ customer[column.key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss">
.app-result-table {
  overflow: auto;
  white-space: nowrap;

  th,
  td {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 4px 16px 4px 0px;
  }

  table {
    table-layout: fixed;

    thead {
      tr {
        th {
          text-align: left;
          padding-bottom: 18px;
          font-weight: 500;
        }
      }
    }
    tbody {
      overflow: scroll;
    }
  }
}
</style>
