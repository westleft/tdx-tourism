<script setup lang="ts">

</script>

<template>
  <footer class="footer">
    <ul class="footer__list-lang">
      <li class="footer__list-item"><p>Follow us</p></li>
      <li class="footer__list-item"><img class="footer__list-img" src="@img/icons/fb.png" /></li>
      <li class="footer__list-item"><img class="footer__list-img" src="@img/icons/yt.png" /></li>
    </ul>
    <p class="footer__text">Copyright © 2021 TRAVEL. All rights reserved. Design by Lola , Front Developed by your name.</p>
    <ul class="footer__list-lang">
      <li class="footer__list-item selected"><p>CH</p></li>
      <li class="footer__list-item"><p>EN</p></li>
      <li class="footer__list-item"><p>JA</p></li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  @include flex(center, space-between);
  background-color: #fff;
  padding: 1.2vw 6vw;
  &__text {
    color: #ACACAC;
    font-size: 1.2vw;
  }
}

.footer__list {
  
  &-lang {
    @include flex();
  }
  &-item {
    @include flex();
    color: #737373;
    opacity: 0.5;
    font-size: 1.2vw;
    padding-left: 1.2vw;
    cursor: pointer;
    &.selected {
      opacity: 1;
    }
  }
  &-img {
    width: 2vw;
  }
}
</style>
