<script setup lang="ts">
import { useElementSize } from '@vueuse/core'
import { ref } from 'vue'
import { RouterView } from 'vue-router'

const el = ref(null)
const { height } = useElementSize(el)

</script>

<template>
  <header ref="el" class="header">
    <RouterView to="/">
      <img class="header__img-logo" src="@img/icons/logo.png">
    </RouterView>
    <ul class="header__list">
      <li>
        <p class="header__list-text">
          找景點<br>ATTRACTION
        </p>
      </li>
      <li>
        <p class="header__list-text">
          找美食<br>DELICACY
        </p>
      </li>
      <li>
        <p class="header__list-text">
          找活動<br>ACTIVITY
        </p>
      </li>
    </ul>
    <div class="">
      <img class="header__img-heart" src="@img/icons/heart.png">
      <img class="header__img-faq" src="@img/icons/faq.png">
    </div>
  </header>
  <div :style="{ height: `${height}px` }"></div>
</template>

<style lang="scss" scoped>

.header {
  @include flex(center, space-between);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  padding: 1.2vw $padding_horizontal;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.10);
  z-index: 1;
  &__list {
    @include flex();

    &-text {
      color: $color_grey;
      text-align: center;
      line-height: 140%;
      padding: 0 2vw;
      font-size: $font_default_size;
      letter-spacing: 0.1vw;
    }
  }

  &__img {
    &-logo {
      width: 6vw;
    }
    &-faq {
      width: 1.6vw;
      margin-left: 1.6vw;
    }
    &-heart {
      width: 1.6vw;
    }
  }
}
</style>
