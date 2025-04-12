import type { TokenResponse } from '../types/'
import axios from 'axios'

const CLIENT_ID = import.meta.env.PUBLIC_CLIENT_ID || ''
const CLIENT_SECRET = import.meta.env.PUBLIC_CLIENT_SECRET || ''

export const useAuth = () => {
  // 設定 token 過期時間
  const setExpiresTime = (expiresIn: number) => {
    const expiresAt = Date.now() + expiresIn * 1000
    localStorage.setItem('expiresAt', String(expiresAt))
  }

  // 確認 token 是否過期
  const checkTokenExpires = (): boolean => {
    const expiresAt = localStorage.getItem('expiresAt')

    if (!expiresAt) {
      return true
    }

    return Date.now() >= Number(expiresAt)
  }

  // 換發 token
  const refreshToken = async () => {
    try {
      const response = await axios.post<TokenResponse>('https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token', {
        grant_type: 'client_credentials',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      }, {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
      })

      const { access_token, expires_in } = response.data
      setExpiresTime(expires_in)

      localStorage.setItem('token', access_token)
    } catch (e: any) {
      throw new Error(e)
    }
  }

  return { checkTokenExpires, refreshToken }
}
