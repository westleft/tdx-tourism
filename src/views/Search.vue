<script setup lang="ts">
import type { ApiResponseWrapper, AttractionItem, EventItem, RestaurantItem } from '../types'
import { computed, onBeforeMount, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { apiGetTourism } from '../api'

type TourismType = 'Attraction' | 'Restaurant' | 'Event'
type TourismItem = (AttractionItem & RestaurantItem & EventItem) & {
  id: string
  name: string
}

const route = useRoute()
const tourismData = ref<TourismItem[]>()

const tourismType = computed((): TourismType => {
  const type = route.params.type as string
  return (type.substring(0, 1).toUpperCase() + type.substring(1)) as TourismType
})

const fetchTourismData = async () => {
  try {
    const response = await apiGetTourism<ApiResponseWrapper<TourismItem[]>>({
      type: tourismType.value,
      query: '?$top=8&$filter=Images/all(x: x/URL ne \'\')',
    })

    return response.data.value
    // tourismData.value = response.data.value
  } catch (e: any) {
    throw new Error(e)
  }
}

watch(route, async () => {
  const response = await fetchTourismData()
  tourismData.value = response
})

onBeforeMount(() => {
  fetchTourismData()
})
</script>

<template>
  <div class="search">
    <ul class="search__list">
      <li v-for="item in tourismData" :key="item[`${tourismType}ID`]" class="list-item">
        <RouterLink to="/" class="list-link">
          <div class="list-img-wrapper">
            <img
              v-if="item.Images[0]"
              class="list-img"
              :src="item.Images[0].URL"
              :alt="item.Images[0].Name"
            >
          </div>
          <h4 class="list-text">
            {{ item[`${tourismType}Name`] }}
          </h4>
          <p class="list-text">
            {{ item.PostalAddress.City }} {{ item.PostalAddress.Town }}
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
    overflow: hidden;
    padding: 1.2vw;
  }

  .list-img {
    &-wrapper {
      overflow: hidden;
      width: 100%;
      height: 12vw;
      margin-bottom: 0.4vw;
      border-radius: 4px;
    }

    @include size(100%, 100%);
    object-fit: cover;
    object-position: center;
    border-radius: 4px;
    transition: 0.4s;
    &:hover {
      transform: scale(1.1);
    }
  }

  .list-link {
    text-decoration: none;
    font-size: 1.2vw;
    // padding: 0.8vw 1.2vw;
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
