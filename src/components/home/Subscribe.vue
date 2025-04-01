<script setup lang="ts">
import { ref } from 'vue'

const isInputFocus = ref(false)
</script>

<template>
  <div class="subscribe">
    <img class="subscribe__img-main" src="@img/subscribe/subscribe-1.jpg" />
    <div class="subscribe__box">
      <h2 class="subscribe__title">
        Subscribe<br>
        <span>每個月來場放鬆旅行</span>
      </h2>
      <p class="subscribe__text">
        如果你願意收到每月旅遊資訊，一起感受台灣旅行的美好。
      </p>
      <div class="subscribe__input-box" :class="[{ isFocus: isInputFocus }]">
        <input
          type="email"
          placeholder="youremail@example.com"
          @focus="isInputFocus = true"
          @blur="isInputFocus = false"
        >
        <img class="@img/subscribe__input-icon" src="@img/icons/send.png" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.subscribe {
  @include flex();
  width: 100%;
  padding: 6vw 8vw;
  background-color: $color_green;
}

.subscribe {
  &__img {
    &-main {
      width: 50%;
      border-radius: 8px;
    }
  }
}

.subscribe__box {
  width: 50%;
  padding-left: 4vw;

  .subscribe__title {
    color: $color_yellow;
    font-size: 2.4vw;
    font-weight: 600;
    letter-spacing: 0.2vw;
    line-height: 140%;
    padding-bottom: 0.8vw;

    >span {
      color: #fff;
      font-weight: 500;
    }
  }

  .subscribe__text {
    color: #fff;
    line-height: 140%;
    font-size: 1.2vw;
    padding-bottom: 2.8vw;
    font-weight: 200;
    letter-spacing: 0.1vw;
  }
}

.subscribe__input-box {
  @include flex();
  border: solid 1px #fff;
  border-radius: 8px;
  padding: 1.2vw;
  opacity: 0.5;
  width: 90%;
  transition: 0.2s;

  &.isFocus {
    opacity: 1;
  }

  >input {
    background-color: #ffffff00;
    font-size: 1.2vw;
    border: none;
    color: #fff;
    width: 100%;
    letter-spacing: 0.1vw;

    &:focus {
      outline: none;
      ;
    }

    &::placeholder {
      color: #fff;
    }
  }

  >.subscribe__input-icon {
    width: 1.2vw;
    cursor: pointer;
  }
}
</style>
