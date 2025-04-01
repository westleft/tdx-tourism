<script setup lang="ts">
const data = [
  {
    name: '祥發海產餐廳',
    description: '位面對東石舊漁港，堤防外有一長排竹蚵屋，是每日青蚵嫂集體剖蚵的好所在，所以在祥發用餐，不但可以品嚐美味，還可以欣賞當地人文風景及剝蚵的光景。',
    image: 'https://i.imgur.com/TxosZO8.jpeg',
  },
  {
    name: '石碇一粒粽',
    description: '粽子主打不油膩、吃了不脹氣，且選用最優質的材料，其中又以桂花粽最為特別，將整朵桂花加入粽子做調味，品嘗粽子的同時也能嚐到桂花香。',
    image: 'https://i.imgur.com/f6nJ3AI.jpeg',
  },
  {
    name: '鄭記香腸',
    description: '位於小琉球的老街上，最古早的鄭記琉球香腸老店創立於民國43年，已成為小琉球當地的名產之一。',
    image: 'https://i.imgur.com/5D1uSRl.jpeg',
  },
  {
    name: '兩支北方麵食館',
    description: '專營北方麵食點心，從各式蒸餃、牛肉麵、酸辣麵等風味佳餚，堅持道地美味的執著，從醒麵、桿皮、包餡到成品，每一個環節都是對客戶的尊重與責任。',
    image: 'https://i.imgur.com/voquVBV.jpeg',
  },
  {
    name: '阿妃健康廚房',
    description: '每顆水餃從肉餡、使用豐富的蔬菜、調味料的比例、水餃皮的手感與功夫，層層步驟讓水餃能兼具口感與高纖維，也讓營養價值更高。',
    image: 'https://i.imgur.com/G9agP45.jpeg',
  },
  {
    name: '鶴岡紅茶舖',
    description: '店內販售花蓮瑞穗有機生態農場所種植的有機茶，坐下品嚐一杯香甜回甘的好茶，可以讓人暫時放掉煩惱，享受純淨的片刻。',
    image: 'https://i.imgur.com/Hs29uyY.jpeg',
  },
  {
    name: '三家村陽春麵',
    description: '餐點上桌前，將佐料瑤舀進碗內，再加入一大早熬製的大骨高湯，最後放進麵條，保持麵體彈性口感不軟爛。',
    image: 'https://i.imgur.com/BKgGS8d.jpeg',
  },
]
</script>

<template>
  <div class="enjoy">
    <div class="enjoy__box">
      <h2 class="enjoy__title">
        Enjoy<br>
        <span>享受在地獨特風味</span>
      </h2>
      <div class="enjoy__box-inner">
        <p class="enjoy__text">
          充斥在台灣大街小巷的在地美食，融合當地生活與文化特色，發展出<br>
          各式各樣風味，從銅板小吃到精緻料理，數不清的美味讓你飽餐一<br>
          頓。
        </p>
        <RouterLink
          :to="{
            name: 'Search',
            params: {
              type: 'restaurant',
            },
          }"
          target="_blank"
          class="enjoy__link"
        >
          享受更多美味
        </RouterLink>
      </div>
    </div>
    <div class="enjoy__image">
      <RouterLink v-for="item in data" :key="item.name" class="enjoy__image-link" to="/">
        <div class="enjoy__image-box">
          <img class="enjoy__image-main" :src="item.image" />
          <div class="enjoy__image-overlay">
            <h4>{{ item.name }}</h4>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </RouterLink>
      <RouterLink v-for="item in data" :key="item.name" class="enjoy__image-link" to="/">
        <div class="enjoy__image-box">
          <img class="enjoy__image-main" :src="item.image" />
          <div class="enjoy__image-overlay">
            <h4>{{ item.name }}</h4>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.enjoy {
  padding: 6vw 0;
  background-color: #fff;
}

.enjoy__box {
  @include flex(flex-end, space-around);
  width: 100%;
  padding: 0 8vw;

  .enjoy__title {
    color: $color_green;
    font-size: 2.4vw;
    font-weight: 600;
    letter-spacing: 0.2vw;
    line-height: 140%;
    padding-bottom: 0.8vw;

    >span {
      color: $color_grey;
      font-weight: 500;
    }
  }

  &-inner {
    @include flex(flex-end, space-around);
    flex-direction: column;
    padding-bottom: 2vw;
    .enjoy__text {
      color: $color_grey;
      line-height: 140%;
      font-size: 1.2vw;
      padding-bottom: 2.8vw;
    }

    .enjoy__link {
      color: $color_green;
      position: relative;
      text-decoration: none;
      font-size: 1.2vw;
      margin-right: 6vw;

      &:hover::after {
        right: -10vw;
      }

      &:hover::before {
        right: -8.6vw;
      }

      &::after,
      &::before {
        position: absolute;
        content: "";
        display: flex;
        border-bottom: solid 2px $color_green;
        top: 70%;
        transition: 0.5s;
      }

      &::after {
        right: -8vw;
        width: 4vw;
        transform: translateX(-50%);
      }

      &::before {
        right: -6.6vw;
        width: 1.2vw;
        transform: translateX(-50%) rotate(45deg);
        transform-origin: 100%;
      }
    }
  }
}

.enjoy__image {
  @include flex(center, flex-start);
  padding-top: 2vw;
  width: 280vw;
  animation: image-animation 30s infinite linear;
  animation-fill-mode: forwards;
  &:hover {
    animation-play-state: paused;
  }
  &-link {
    display: flex;
    width: 20vw;
    border-radius: 8px;
    overflow: hidden;
    margin: 0.8vw;
    &:hover {
      .enjoy__image-overlay {
        opacity: 1;
      }
    }
  }
  &-box {
    position: relative;
    width: 100%;
  }
  &-main {
    width: 100%;
  }
  &-overlay {
    @include flex();
    @include size(100%, 100%);
    transition: 0.2s;
    opacity: 0;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #00000078;
    z-index: 1;
    color: #fff;
    padding: 2vw;
    > h4 {
      font-size: 1.2vw;
      padding-bottom: 0.8vw;
      letter-spacing: 0.2vw;
    }

    > p {
      line-height: 140%;
      font-size: 1vw;
      letter-spacing: 0.2vw;
    }
  }
}

.paused{
  animation-play-state: paused;
}

@keyframes image-animation {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-140vw);
  }
}
</style>
