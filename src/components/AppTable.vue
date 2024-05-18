<script setup lang="ts">
import { computed } from 'vue'
import customers from '../data/customers'

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

const virtualBoats = computed(() =>
  [...Array(10000).keys()].map((i) => {
    const boat = { ...boats[i % boats.length] }
    boat.name = `${boat.name} #${i}`
    return boat
  })
)
</script>

<template>
  <div class="app-table">
    <v-data-table-virtual
      :headers="headers"
      :items="virtualBoats"
      fixed-header
      height="300"
      item-value="name"
    ></v-data-table-virtual>
  </div>
</template>

<style lang="scss">
.app-table {
  padding-bottom: 24px;
  height: 30%;
  border: 1px solid #333;
}
</style>
