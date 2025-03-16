<script setup lang="ts">
import { ref } from 'vue'
const showSearchDetail = ref(true)

</script>

<template>
  <div class="hero">
    <h2 class="hero__title">
      遠離日常喧囂<br>
      讓旅行豐富你的生活
    </h2>
    <!-- <div class="hero__search">
      <div class="hero__search-bar">
        <input
          class="hero__search-input"
          placeholder="想去哪裡？"
          type="text"
          @focus="showSearchDetail = true"
          @blur="showSearchDetail = false"
        >
        <img src="@img/icons/search.svg" alt="">
      </div>
      <div v-show="showSearchDetail" class="hero__search-box">
        <p class="hero__search-type">
          想搜尋的類別
        </p>
        <ul class="hero__search-list">
          <li class="hero__search-item">
            <p class="hero__search-text selected">
              景點
            </p>
          </li>
          <li class="hero__search-item">
            <p class="hero__search-text">
              景點
            </p>
          </li>
          <li class="hero__search-item">
            <p class="hero__search-text">
              景點
            </p>
          </li>
        </ul>
        <p class="hero__search-type">
          熱門關鍵字
        </p>
        <div class="hero__search-links">
          <RouterLink class="hero__search-link" to="/">
            澎湖花火節
          </RouterLink>
          <RouterLink class="hero__search-link" to="/">
            親子露營
          </RouterLink>
          <RouterLink class="hero__search-link" to="/">
            北投溫泉旅館
          </RouterLink>
        </div>
      </div>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
.hero {
  @include flex();
  flex-direction: column;
  min-height: 100vh;
  background-image: url("@/assets/images/background/hero.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  &__title {
    font-size: 3.2vw;
    color: #ffffff;
    line-height: 140%;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.60);
    font-weight: 500;
    letter-spacing: 0.6vw;
    // padding-bottom: 1.2vw;
  }

  &__search {
    position: relative;
    background-color: #ffffff;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.80);
    width: 34vw;
    border-radius: 4px;
    padding: 1.2vw;
    &:hover {
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.10);
    }
    &-bar {
      @include flex();
    }
    &-input {
      border: none;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding: 0 1.6vw 0;
      font-size: 1.2vw;
      color: #73737380;
      &:focus {
        outline: none;
      }
    }
  }

  .hero__search-box {
    position: absolute;
    top: 4vw;
    border-top: solid 1.6px #737373;
    margin-top: 0.4vw;
    padding: 1.6vw ;
    background-color: #fff;
    width: 100%;
    left: 0;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.10);
    border-radius: 0 0 4px 4px ;
    .hero__search {
      &-type {
        color: #ACACAC;
        font-size: 0.4vw;
      }
      &-list {
        @include flex(flex-start, flex-start);
        width: 100%;
        padding: 1.2vw 0;
      }
      &-item {
        @include flex();
        margin-right: 1.2vw;
      }
      &-text {
        color: $color_grey;
        padding: 0.4vw 0.8vw;
        border: solid $color_grey 1px;
        border-radius: 4px;
        font-size: 1.2vw;
        cursor: pointer;
        &:hover {
          color: $color_green;
          border: solid $color_green 1px;
        }
        &.selected {
          background-color: $color_green;
          color: #ffffff;
          border: solid $color_green 1px;
        }
      }
      &-links {
        @include flex(flex-start);
        flex-direction: column;
      }
      &-link {
        color: $color_grey;
        font-size: 1.2vw;
        text-decoration: none;
        margin-top: 1.2vw;
      }
    }
  }
}
</style>
