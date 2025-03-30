<script setup lang="ts">

</script>

<template>
  <div class="list-link">
    <div class="list-img-wrapper ">
      <div class="list-img skeleton"></div>
    </div>
    <h4 class="list-text skeleton"></h4>
    <p class="list-text skeleton"></p>
  </div>
</template>

<style lang="scss" scoped>
.list-link {
  @include flex(flex-start, flex-start);
  flex-direction: column;
  width: 100%;
}

.list-img {
  border-radius: 4px;

  &-wrapper {
    width: 100%;
    height: 12vw;
    margin-bottom: 0.4vw;
    border-radius: 4px;
  }
}

.list-img {
  @include size(100%, 100%);
}

h4.list-text {
  margin-bottom: 0.4vw;
  width: 100%;
  height: 1.4vw;
}

p.list-text {
  width: 100%;
  height: 1.4vw;
}

.skeleton {
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite linear;
  border-radius: 4px;
}

@keyframes skeleton-loading {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}
</style>
