<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  title: string
  description: string
  id: string
  imageUrl?: string
}>()

const imageLoading = ref(true)
const imageLoaded = () => imageLoading.value = false
</script>

<template>
  <RouterLink
    :to="{
      name: 'Info',
      params: {
        id: props.id,
      },
    }"
    class="list-link"
  >
    <div class="list-img-wrapper">
      <div v-if="props.imageUrl && imageLoading" class="skeleton"></div>
      <img
        v-if="props.imageUrl"
        class="list-img"
        :src="props.imageUrl"
        :alt="props.title"
        @load="imageLoaded"
      >
      <div v-else class="list-img-not">
        <p>此景點尚未提供圖片</p>
      </div>
    </div>
    <h4 class="list-text">
      {{ props.title }}
    </h4>
    <p class="list-text">
      {{ props.description }}
    </p>
  </RouterLink>
</template>

<style lang="scss" scoped>
.list-link {
  @include flex(flex-start, flex-start);
  flex-direction: column;
  overflow: hidden;
  width: 100%;
}

.list-img {
  &-wrapper {
    overflow: hidden;
    width: 100%;
    height: 12vw;
    margin-bottom: 0.4vw;
    border-radius: 4px;
  }

  @include size(100%, 100%);
  object-fit: cover;
  object-position: center;
  border-radius: 4px;
  transition: 0.4s;
  &:hover {
    transform: scale(1.1);
  }
}

.list-img-not {
  @include size(100%, 100%);
  @include flex();
  background-image: url('https://i.imgur.com/TD1YJ36.jpeg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  p {
    color: #FAFAFA;
  }
}

.list-link {
  text-decoration: none;
  font-size: 1.2vw;
  // padding: 0.8vw 1.2vw;
}

.list-text {
  line-height: 140%;
  color: $color_grey;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-wrap: break-word;
  width: 100%;
}

h4.list-text {
  font-size: 1.2vw;
  padding-bottom: 0.2vw;
  font-weight: 600;
}

p.list-text {
  font-size: 1vw;
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
