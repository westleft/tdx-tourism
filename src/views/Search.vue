<script setup lang="ts">
import type { ApiResponseWrapper, TourismItem } from '@/types'
import Card from '@/components/common/Card.vue'
import CardSkeleton from '@/components/common/CardSkeleton.vue'
import { useInfiniteScroll, useTourism, useTourismPagination } from '@/composables'
import { ref, watch } from 'vue'

const tourismData = ref<TourismItem[]>([])
const { tourismType, fetchTourismData } = useTourism()
const { query, setQuery } = useTourismPagination()

// 取得 api 資料
const getTourismData = async () => {
  const response = await fetchTourismData<ApiResponseWrapper<TourismItem[]>>({
    type: tourismType.value,
    query: `?$top=${query.top}&skip=${query.skip}`,
  })
  tourismData.value?.push(...response.value)
  setQuery('skip', query.skip += query.top)
}

// 無限滾動載入資料
useInfiniteScroll('observer-div', getTourismData)

// 監聽 url type 異動，變更後重置
watch(tourismType, async () => {
  setQuery('skip', 0)
  tourismData.value = []
  getTourismData()
})
</script>

<template>
  <div class="search">
    <ul class="search__list">
      <li v-for="item in tourismData" :key="item[`${tourismType}ID`]" class="list-item">
        <Card
          v-if="item[`${tourismType}ID`]"
          :id="item[`${tourismType}ID`]"
          :title="item[`${tourismType}Name`]"
          :description="`${item.PostalAddress.City} ${item.PostalAddress.Town}`"
          :image-url="item.Images[0] && item.Images[0].URL"
        />
      </li>
    </ul>
    <ul ref="observer-div" class="search__list">
      <li v-for="i in 20" :key="i" class="list-item">
        <CardSkeleton />
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
  .list-item {
    @include flex();
    width: 25%;
    overflow: hidden;
    padding: 1.2vw;
  }
}
</style>
