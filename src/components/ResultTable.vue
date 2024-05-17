<script setup lang="ts">
import customers from '../data/customers.js'

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
  <div class="result-table-wrapper">
    <table>
      <tr>
        <th v-for="column in columns" :key="column.key" :style="column.style">
          {{ column.name }}
        </th>
      </tr>
      <tr v-for="customer in customers" :key="customer.customerID">
        <td>{{ customer.customerID }}</td>
        <td>{{ customer.companyName }}</td>
        <td>{{ customer.contactName }}</td>
        <td>{{ customer.contactTitle }}</td>
        <td>{{ customer.address }}</td>
        <td>{{ customer.city }}</td>
        <td>{{ customer.region }}</td>
        <td>{{ customer.postalCode }}</td>
        <td>{{ customer.country }}</td>
        <td>{{ customer.phone }}</td>
        <td>{{ customer.tax }}</td>
      </tr>
    </table>
  </div>
</template>

<style lang="scss">
.result-table-wrapper {
  // height: 100%;
  // max-height: 100%;
  overflow: scroll;
  flex: 1;

  table {
    // display: none;
    tr {
      th {
        text-align: left;
      }
    }
  }
}
</style>
