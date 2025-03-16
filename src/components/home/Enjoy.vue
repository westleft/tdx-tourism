<script setup lang="ts">

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
        <RouterLink to="/" class="enjoy__link">
          享受更多美味
        </RouterLink>
      </div>
    </div>
    <div class="enjoy__image">
      <RouterLink v-for="i in 7" :key="i" class="enjoy__image-link" to="/">
        <div class="enjoy__image-box">
          <img class="enjoy__image-main" :src="require(`@img/enjoy/enjoy-${i}.jpg`)" />
          <div class="enjoy__image-overlay">
            <h4>鄭記香腸</h4>
            <p>位於小琉球的老街上，最古早的鄭記琉球香腸老店創立於民國43年，已成為小琉球當地的名產之一。</p>
          </div>
        </div>
      </RouterLink>
      <RouterLink v-for="i in 7" :key="i" class="enjoy__image-link" to="/">
        <div class="enjoy__image-box">
          <img class="enjoy__image-main" :src="require(`@img/enjoy/enjoy-${i}.jpg`)" />
          <div class="enjoy__image-overlay">
            <h4>鄭記香腸</h4>
            <p>位於小琉球的老街上，最古早的鄭記琉球香腸老店創立於民國43年，已成為小琉球當地的名產之一。</p>
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
