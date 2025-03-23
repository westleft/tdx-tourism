<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { apiGetTourism } from '../api'

interface ApiResponse {
  value: {
    AttractionName: string
  }[]
}

// onBeforeMount(async () => {
//   const response = await apiGetTourism<ApiResponse>(`?%24top=10&$select=AttractionName`)
//   console.log(response.data.value[0].AttractionName)
// })
</script>

<template>
  <div class="search">
    <!-- <SearchBar /> -->
  </div>
</template>

<style lang="scss" scoped>
.search {
  background-color: #FAFAFA;
  min-height: 100vh;
  width: 100vw;
}
</style>
