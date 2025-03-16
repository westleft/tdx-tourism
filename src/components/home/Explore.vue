<script setup lang="ts">

const imageList = [
  {
    text: '台東金剛大道'
  }, {
    text: '南投日月潭文武廟'
  }, {
    text: '寧夏觀光夜市'
  }, {
    text: '南投合歡山'
  }, {
    text: '北投圖書館'
  }, {
    text: '樹林青龍嶺步道'
  }, {
    text: '水里車埕車站'
  }
]

</script>

<template>
  <div class="explore">
    <div class="explore__box box-top">
      <div class="explore__box-inner">
        <h2 class="explore__title">
          Explore<br>
          <span>探索台灣每個角落</span>
        </h2>
        <p class="explore__text">
          台灣擁有高山峽谷及四面環海地理特性，因此擁有各種自然景致等待<br>
          人們發現，無論想要來場山林陶冶身心之旅，抑或體驗歷史人文的深<br>
          度旅行，都可以在台灣這片土地上踏尋不同的風采。
        </p>
        <RouterLink to="/" class="explore__link">
          探索更多景色
        </RouterLink>
      </div>
      <div class="explore__images">
        <div
          v-for="(item, index) in imageList.slice(0, 3)"
          :key="index"
          class="explore__image-box"
        >
          <div class="explore__image-outer">
            <img
              class="explore__image"
              :src="require(`@img/explore/attraction-${index + 1}.jpg`)"
              :alt="`${item.text} 圖片`"
            />
          </div>
          <p class="explore__image-alt">{{ item.text }}</p>
        </div>
      </div>
    </div>
    <div class="explore__box box-bottom">
      <div
        v-for="(item, index) in imageList.slice(3, 7)"
        :key="index"
        class="explore__image-box"
      >
        <div class="explore__image-outer">
          <img
            class="explore__image"
            :src="require(`@img/explore/attraction-${index + 4}.jpg`)"
            :alt="`${item.text} 圖片`"
            loading="lazy"
          />
        </div>
        <p class="explore__image-alt">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.explore {
  padding: 6vw 0;

  &__box {
    @include flex();
    &.box-top {
      transform: translateX(8vw);
      padding-bottom: 4vw;
    }

    &.box-bottom {
      transform: translateX(6vw);
    }
    .explore__box-inner {
      width: 40%;
    }
  }

  &__title {
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

  &__text {
    color: $color_grey;
    line-height: 140%;
    font-size: 1.2vw;
    padding-bottom: 2.8vw;
  }

  &__link {
    color: $color_green;
    position: relative;
    text-decoration: none;
    font-size: 1.2vw;
    &:hover::after {
      right: -10vw;
    }
    &:hover::before {
      right: -8.6vw;
    }
    &::after, &::before {
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

// common
.explore__box {
  .explore__images {
    @include flex(flex-start);
    width: 60%;
    }
    .explore__image-box {
      @include flex(flex-start);
      overflow: hidden;
    }

    .explore__image {
      width: 18vw;
      transition: 0.4s;

      &:hover {
        transform: scale(1.2);
      }
    }

    .explore__image-alt {
      color: $color_grey;
      writing-mode: vertical-lr;
      font-size: 1.2vw;
      padding: 0 1.6vw 0 0.4vw;
      letter-spacing: 0.2vw;
    }

    .explore__image-outer {
      overflow: hidden;
      border-radius: 4px;
    }

}
</style>
