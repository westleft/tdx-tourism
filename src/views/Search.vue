<script setup lang="ts">
import type { ApiResponseWrapper, TourismItem, TourismType } from '@/types'
import { apiGetTourism } from '@/api'
import Card from '@/components/common/Card.vue'
import { capitalize } from '@/utils/'
import { computed, onBeforeMount, ref, watch } from 'vue'
import { toast } from 'vue3-toastify'
import { useRoute } from 'vue-router'

const route = useRoute()
const tourismData = ref<TourismItem[]>()

const tourismType = computed((): TourismType => {
  const type = route.params.type as string
  return capitalize<TourismType>(type)
})

const fetchTourismData = async () => {
  try {
    const response = await apiGetTourism<ApiResponseWrapper<TourismItem[]>>({
      type: tourismType.value,
      query: '?$top=20&$filter=Remarks ne \'\'  ',
    })

    return response.data.value
  } catch (e: any) {
    toast.error('請求次數過多，請稍後再試', {
      autoClose: 3000,
    })
    throw new Error(e)
  }
}

const getTourismData = async () => {
  const response = await fetchTourismData()
  tourismData.value = response
}

watch(route, async () => {
  getTourismData()
})

onBeforeMount(() => {
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
