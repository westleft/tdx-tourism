import { z } from 'zod'

export const TokenResponseSchema = z.object({
  'access_token': z.string(), // JWT Token
  'expires_in': z.number(), // Token 有效時間（秒）
  'not-before-policy': z.number(), // 可能是 token 可用的開始時間
  'refresh_expires_in': z.number(), // Refresh Token 的有效時間
  'scope': z.string(), // 權限範圍
  'token_type': z.string(), // Token 類型（Bearer）
})

export type TourismType = 'Attraction' | 'Restaurant' | 'Event'

export type TokenResponse = z.infer<typeof TokenResponseSchema>

export type {
  ApiResponseWrapper,
  AttractionItem,
  CommonTourismItem,
  EventItem,
  RestaurantItem,
  TourismItem,
} from './response.ts'
