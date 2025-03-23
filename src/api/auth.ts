import type { TokenResponse } from '../types/'
import { api } from '.'

export const apiGetAccessToken = (data: {
  grant_type: string
  client_id: string
  client_secret: string
}) => api.post<TokenResponse>('/auth/realms/TDXConnect/protocol/openid-connect/token', data)
