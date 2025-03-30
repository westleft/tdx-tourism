<script setup lang="ts">
import type { TourismItem, TourismType } from '@/types'
import { apiGetTourism } from '@/api'
import Card from '@/components/common/Card.vue'
import { useMap } from '@/composables'
import { splitByUnderscore } from '@/utils/'
import { nextTick, onMounted, ref } from 'vue'
import { toast } from 'vue3-toastify'
import { useRoute } from 'vue-router'
import 'leaflet/dist/leaflet.css'

const route = useRoute()
const type = splitByUnderscore<TourismType>(route.params.id as string)
const tourismData = ref<TourismItem>()

const fetchTourismData = async () => {
  try {
    const response = await apiGetTourism<TourismItem>({
      type,
      query: `/${route.params.id as string}`,
    })

    return response.data
  } catch (e: any) {
    toast.error('請求次數過多，請稍後再試', {
      autoClose: 3000,
    })
    throw new Error(e)
  }
}

onMounted(async () => {
  tourismData.value = await fetchTourismData()
  await nextTick()
  const { PositionLon, PositionLat } = tourismData.value
  useMap('map', {
    PositionLon,
    PositionLat,
  })
})
</script>

<template>
  <div v-if="tourismData" class="info">
    <section class="info__hero">
      <div class="wrapper">
        <div class="info__tags">
          <span># {{ tourismData.PostalAddress.City }}</span>
        </div>
        <h1 class="info__title">
          {{ tourismData[`${type}Name`] }}
        </h1>
      </div>
      <div class="info__detail">
        <ul class="info__detail-list">
          <li class="list-item">
            <h4 class="list-title">
              <img class="info__icon" src="https://i.imgur.com/rwjxhe7.png" alt="">
              聯絡方式
            </h4>
            <p class="list-text">
              {{ tourismData.Telephones[0].Tel || '無提供資料' }}
            </p>
          </li>
          <li class="list-item">
            <h4 class="list-title">
              <img class="info__icon" src="https://i.imgur.com/2bNDgEQ.png" alt="">
              所在地址
            </h4>
            <p class="list-text">
              {{ tourismData.PostalAddress.City }}
              {{ tourismData.PostalAddress.Town }}
              {{ tourismData.PostalAddress.StreetAddress }}
            </p>
          </li>
          <li class="list-item">
            <h4 class="list-title">
              <img class="info__icon" src="https://i.imgur.com/NbAhD2a.png" alt="">
              開放時間
            </h4>
            <p class="list-text">
              {{ tourismData.ServiceTimeInfo || '無提供資料' }}
            </p>
          </li>
        </ul>
        <img
          v-if="tourismData.Images[0]"
          class="info__detail-img"
          :src="tourismData.Images[0].URL"
          :alt="tourismData.Images[0].Name"
        >
        <img
          v-else
          class="info__detail-img"
          src="https://i.imgur.com/TD1YJ36.jpeg"
          alt=""
        >
      </div>
    </section>

    <section class="info__description">
      <div class="wrapper">
        <span>
          Description
        </span>
        <h2 class="info__subtitle title-line">
          特色簡介
        </h2>
        <p class="info__text">
          {{ tourismData.Description }}
        </p>
      </div>
    </section>

    <section class="info__map">
      <div id="map"></div>
    </section>

    <section class="info__others">
      <div class="wrapper">
        <section class="info__description">
          <span>
            Traffic
          </span>
          <h2 class="info__subtitle title-line">
            交通資料
          </h2>
          <p class="info__text">
            {{ tourismData.TrafficInfo || '無提供資料' }}
          </p>
        </section>
        <section class="info__description">
          <span>
            Parking
          </span>
          <h2 class="info__subtitle title-line">
            停車建議
          </h2>
          <p class="info__text">
            {{ tourismData.ParkingInfo || '無提供資料' }}
          </p>
        </section>
      </div>
    </section>

    <section class="info__marks">
      <div class="wrapper">
        <div class="info__marks-title">
          <span>
            Precaution
          </span>
          <h2 class="info__subtitle">
            注意事項
          </h2>
        </div>

        <p class="info__text">
          {{ tourismData.Remarks || '無提供資料' }}
        </p>
      </div>
    </section>

    <section class="info__near">
      <div class="wrapper">
        <span>
          Nearby
        </span>
        <h2 class="info__subtitle title-line">
          附近景點
        </h2>
        <ul class="info__near-list">
          <li class="list-item">
            <Card
              id="4545"
              title="'item[`${tourismType}Name`]'"
              description="`'${item.PostalAddress.City} ${item.PostalAddress.Town}'`"
              image-url="https://i.imgur.com/TD1YJ36.jpeg"
            />
          </li>
          <li class="list-item">
            <Card
              id="4545"
              title="'item[`${tourismType}Name`]'"
              description="`'${item.PostalAddress.City} ${item.PostalAddress.Town}'`"
              image-url="https://i.imgur.com/TD1YJ36.jpeg"
            />
          </li>
          <li class="list-item">
            <Card
              id="4545"
              title="金門國際海洋藝術季"
              description="金門國際海洋藝術季今年邁入第四年，以「湖光馥郁」為主題金門國際海洋藝術季今年邁入第四年，以「湖光馥郁」為主題金門國際海洋藝術季今年邁入第四年，以「湖光馥郁」為主題"
              image-url="https://i.imgur.com/TD1YJ36.jpeg"
            />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.info {
  width: 100vw;
  padding: 12vh 0;
  span {
    display: flex;
    color: #4F4F4F;
    font-size: 1vw;
    padding-bottom: 6px;
  }

  .info__subtitle {
    @include flex(center, space-between);
    width: 100%;
    font-size: 2vw;
    color: #4F4F4F;
    padding-bottom: 4vh;
    &.title-line {
        &::after {
        content: '';
        display: block;
        width: 84%;
        height: 2px;
        background-color: #E7E7E7;
      }
    }
  }
}

.wrapper {
  @include flex(flex-start, flex-start);
  width: 100%;
  max-width: 80vw;
}

.info__hero {
  @include flex();
  flex-direction: column;
  margin-bottom: 8vh;

  .wrapper {
    @include flex(flex-start, flex-start);
    flex-direction: column
  }

  .info__tags {
    @include flex(flex-start, flex-start);
    width: 100%;
    padding-bottom: 1vh;

    span {
      background-color: #F1F5EE;
      color: #769763;
      padding: 0.4vw 0.6vw;
      border-radius: 4px;
      font-size: 0.8vw;
    }
  }

  .info__title {
    color: #4F4F4F;
    font-size: 2.4vw;
    padding-bottom: 16vh;
    font-size: 2vw;
  }

  .info__icon {
    width: 1.6vw;
    margin-right: 0.4vw;
  }

  .info__detail {
    @include flex(space-between, space-between);
    width: 100%;
    background-color: #F1F5EE;
    &-list {
      @include flex(center, flex-start);
      flex-direction: column;
      font-size: 1.2vw;
      padding-left: 10vw;
      padding-top: 12vh;
    }

    .list-item {
      width: 100%;
      padding-bottom: 4vh;
    }

    .list-title {
      @include flex(center, flex-start);
      color: #769763;
      padding-bottom: 0.4vw;
    }

    .list-text {
      color: #737373;
      line-height: 140%;
      padding-left: 2vw;
    }
  }

  .info__detail-img {
    width: 60%;
    height: 70vh;
    object-fit: cover;
    object-position: center;
    transform: translateY(-8vh);
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }
}

.info__description {
  @include flex();
  width: 100%;
  margin-bottom: 8vh;

  .wrapper {
    @include flex(flex-start, flex-start);
    flex-direction: column;
    padding-right: 16vw;
  }

  .info__text {
    color: #737373;
    font-size: 1.2vw;
    line-height: 140%;
    white-space: pre-wrap;
  }
}

.info__map {
  width: 100%;
  height: 60vh;
  padding-right: 20vw;
  margin-bottom: 12vh;
  #map {
    width: 100%;
    height: 100%;
  }
}

.info__others {
  @include flex();
  width: 100%;
  padding-bottom: 8vh;

  .wrapper {
    @include flex(flex-start, space-between);
    width: 100%;
  }
  section {
    @include flex(flex-start, flex-start);
    flex-direction: column;
    width: 42%;
  }

  .info__subtitle {
    &.title-line {
      &::after {
        width: 70%;
      }
    }
  }
}

.info__marks {
  @include flex();
  background-color: #F1F5EE;
  padding: 8vh 0;
  border-left: 1.6vw solid #A1B893;
  margin-bottom: 8vh;
  .info__marks-title {
    width: 20%;
  }
  .info__text {
    width: 80%;
    color: #737373;
    font-size: 1.2vw;
    line-height: 140%
  }
}

.info__near {
  @include flex();
  .wrapper {
    @include flex(flex-start, flex-start);
    flex-direction: column;
  }

  .info__near-list {
    @include flex(flex-start, space-between);
    width: 100%;
    .list-item {
      width: 30%;
    }
  }
}
</style>
