import type { ApiResponseWrapper, TourismItem, TourismType } from '@/types'
import { apiGetTourism } from '@/api'
import { capitalize } from '@/utils/'
import { computed } from 'vue'
import { toast } from 'vue3-toastify'
import { useRoute } from 'vue-router'

export const useTourism = () => {
  const route = useRoute()

  const tourismType = computed((): TourismType => {
    const type = route.params.type as string
    return capitalize<TourismType>(type)
  })

  const fetchTourismData = async <T>(agrs: {
    type: string
    query: string
  }) => {
    try {
      // ApiResponseWrapper<TourismItem[]>
      const { type, query } = agrs
      const response = await apiGetTourism<T>({
        type,
        query,
      })

      return response.data
    } catch (e: any) {
      toast.error('請求次數過多，請稍後再試', {
        autoClose: 3000,
      })
      throw new Error(e)
    }
  }

  return { tourismType, fetchTourismData }
}
