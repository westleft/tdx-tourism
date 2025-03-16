<script setup lang="ts">
import { ref } from 'vue'

const listTexts = [
  '一年一度精采盛事',
  '追逐自由單車旅程',
  '親自踏上山海之旅',
  '體驗台灣文化慶典'
]

const imageIndex = ref(1)

// function useAsset (path: string): string {
//   const assets = import.meta.glob('@/assets/images/**/*', {
//     eager: true,
//     import: 'default'
//   })

//   // @ts-expect-error: wrong type info
//   return assets[path]
// }
</script>

<template>
  <div class="participate">
    <div class="participate__inner">
      <img
        class="participate__img-main"
        :src="require(`@img/participate/participate-${imageIndex}.jpg`)"
        loading="lazy"
        alt=""
      />
      <div class="participate__text-box">
        <h2 class="participate__title">
          Participate<br>
          <span>體驗當地風情人文</span>
        </h2>
        <p class="participate__text">
          台灣擁有豐富文俗風情，因地貌多變延伸出豐富的主題<br>
          活動，邀請你體驗文化的精彩。
        </p>
        <ul class="participate__list">
          <li
            v-for="(text, index) in listTexts"
            :key="text"
            class="participate__list-item"
            @mouseenter="imageIndex = index + 1"
          >
            <p :class="['participate__list-text', {'selected': imageIndex === index + 1}]">
              {{ text }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.participate {
  padding: 6vw 0;
  background-color: #FAFAFA;

  &__inner {
    @include flex(flex-start, flex-start);
    width: 90%;
  }

  &__img {
    &-main {
      width: 60%;
    }
  }
}

.participate__text-box {
  padding: 0 2vw;
  .participate {
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
    }

    &__list {
      padding: 2vw 0;
      width: 100%;
      &-item {
        border-bottom: solid 1px $color_green;
      }
      &-text {
        display: flex;
        color: $color_green;
        font-size: 1.2vw;
        padding: 1.2vw 0;
        font-weight: 500;
        &.selected {
          &::after {
            @include size(0.8vw, 0.8vw);
            position: relative;
            content: "";
            display: flex;
            background-color: $color_yellow;
            top: 0.2vw;
            border-radius: 100%;
            margin-left: 0.4vw;
          }
        }
      }
    }
  }
}
</style>
