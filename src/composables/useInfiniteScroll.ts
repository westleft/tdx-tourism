// composables/useInfiniteScroll.ts
import { useIntersectionObserver } from '@vueuse/core'
import { useTemplateRef } from 'vue'

export const useInfiniteScroll = (elName: string, callback: () => Promise<void>) => {
  const observerDiv = useTemplateRef<HTMLDivElement>(elName)

  const { stop } = useIntersectionObserver(
    observerDiv,
    async ([{ isIntersecting }]) => {
      if (isIntersecting) {
        await callback()
      }
    },
  )

  return { stop }
}
