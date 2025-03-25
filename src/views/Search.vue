<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { apiGetTourism } from '../api'

interface ApiResponse {
  value: {
    AttractionName: string
  }[]
}

const tourismData = ref()

onBeforeMount(async () => {
  const response = await apiGetTourism<ApiResponse>(`?top=5&$select=AttractionName,PostalAddress,AttractionID&$format=JSON`)
  tourismData.value = response.data.value
  console.log(tourismData.value)
})
</script>

<template>
  <div class="search">
    <ul class="search__list">
      <li v-for="i in 10" :key="i" class="list-item">
        <RouterLink to="/" class="list-link">
          <img class="list-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFUAfyVe3Easiycyh3isP9wDQTYuSmGPsPQvLIJdEYvQ_DsFq5Ez2Nh_QjiS3oZ3B8ZPfK9cZQyIStmQMV1lDPLw" alt="">
          <h4 class="list-text">
            綠島豆丁海馬海底郵筒
          </h4>
          <p class="list-text">
            臺南市 將軍區
          </p>
        </RouterLink>
      </li>
    </ul>
    <!-- <SearchBar /> -->
  </div>
</template>

<style lang="scss" scoped>
.search {
  @include flex(center, flex-start);
  flex-direction: column;
  background-color: #FAFAFA;
  min-height: 100vh;
  width: 100vw;
  padding: 4vw;
}

.search__list {
  @include flex(flex-start, space-between);
  flex-wrap: wrap;
  width: 100%;
  color: $color_grey;

  .list-link {
    width: 100%;
  }

  .list-item {
    @include flex();
    width: 25%;
    // background-color: red;
  }

  .list-img {
    object-fit: cover;
    object-position: center;
    border-radius: 4px;
    width: 100%;
    height: 12vw;
    margin-bottom: 0.8vw;
  }

  .list-link {
    font-size: 1.2vw;
    padding: 0.8vw 1.2vw;
  }

  .list-text {
    line-height: 140%;
    color: $color_grey;
  }

  h4.list-text {
    font-size: 1.2vw;
    padding-bottom: 0.2vw;
  }
  p.list-text {
    font-size: 1vw;
  }
}
</style>
