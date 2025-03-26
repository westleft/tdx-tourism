import { capitalize } from '@/utils/'
import { describe, expect, it } from 'vitest'

describe('utils', () => {
  it('capitalize(): 字首轉大寫', () => {
    const text = 'hello'
    const result = capitalize(text)

    expect(result).toBe('Hello')
  })
})
