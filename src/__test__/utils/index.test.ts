import { capitalize, splitByUnderscore } from '@/utils/'
import { describe, expect, it } from 'vitest'

describe('utils', () => {
  it('capitalize(): 字首轉大寫', () => {
    const text = 'hello'
    const result = capitalize(text)

    expect(result).toBe('Hello')
  })

  it('splitByUnderscore(): 用_切割並取得第一個字串', () => {
    const text = 'Restaurant_376430000A_000018'
    const result = splitByUnderscore(text)

    expect(result).toBe('Restaurant')
  })
})
