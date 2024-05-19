<script setup lang="ts">
import { computed, ref } from 'vue'
import customers from '../data/customers'
import { onMounted } from 'vue'

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

const headers = [
  { title: 'Boat Type', align: 'start', key: 'name' },
  { title: 'Speed (knots)', align: 'end', key: 'speed' },
  { title: 'Length (m)', align: 'end', key: 'length' },
  { title: 'Price ($)', align: 'end', key: 'price' },
  { title: 'Year', align: 'end', key: 'year' }
]

const computedHeaders = computed(() => headers.map((header) => ({ ...header, sortable: false })))

const boats = [
  {
    name: 'Speedster',
    speed: 35,
    length: 22,
    price: 300000,
    year: 2021
  },
  {
    name: 'OceanMaster',
    speed: 25,
    length: 35,
    price: 500000,
    year: 2020
  },
  {
    name: 'Voyager',
    speed: 20,
    length: 45,
    price: 700000,
    year: 2019
  },
  {
    name: 'WaveRunner',
    speed: 40,
    length: 19,
    price: 250000,
    year: 2022
  },
  {
    name: 'SeaBreeze',
    speed: 28,
    length: 31,
    price: 450000,
    year: 2018
  },
  {
    name: 'HarborGuard',
    speed: 18,
    length: 50,
    price: 800000,
    year: 2017
  },
  {
    name: 'SlickFin',
    speed: 33,
    length: 24,
    price: 350000,
    year: 2021
  },
  {
    name: 'StormBreaker',
    speed: 22,
    length: 38,
    price: 600000,
    year: 2020
  },
  {
    name: 'WindSail',
    speed: 15,
    length: 55,
    price: 900000,
    year: 2019
  },
  {
    name: 'FastTide',
    speed: 37,
    length: 20,
    price: 280000,
    year: 2022
  }
]

const totalRows = 10000
const virtualBoats = computed(() =>
  [...Array(totalRows).keys()].map((i) => {
    const boat = { ...boats[i % boats.length] }
    boat.name = `${boat.name} #${i}`
    return boat
  })
)

// height
const appTableRef = ref<HTMLDivElement>()
const virtualTableHeight = ref(300)
const appTableHeaderHeight = ref(40)
onMounted(() => {
  if (appTableRef.value) {
    const bottomPadding = 18
    virtualTableHeight.value =
      appTableRef.value.clientHeight - appTableHeaderHeight.value - bottomPadding
  }
})
</script>

<template>
  <div class="app-table" ref="appTableRef">
    <div class="app-table-header" :style="{ height: appTableHeaderHeight }">
      <div>Total rows: {{ totalRows }}</div>
    </div>
    <v-data-table-virtual
      :headers="computedHeaders"
      :items="virtualBoats"
      :height="virtualTableHeight"
      fixed-header
      item-value="name"
    />
  </div>
</template>

<style lang="scss">
.app-table {
  height: calc(100% - 160px);

  .v-table {
    border-bottom: 1px solid #bdb9b9;
  }

  .app-table-header {
    padding: 4px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
