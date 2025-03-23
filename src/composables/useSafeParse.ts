import type { z } from 'zod'

export const useSafeParse = <T>(schema: z.Schema<T>, response: unknown): T => {
  const result = schema.safeParse(response)

  if (!result.success) {
    console.error('Zod 驗證錯誤:', result.error.errors)
  }

  // 失敗時仍然回傳原始資料
  return result.success ? result.data : (response as T)
}
