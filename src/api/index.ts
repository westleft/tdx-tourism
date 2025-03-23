import axios from 'axios'
import { useAuth } from '../composables/'

export { apiGetAccessToken } from './auth'
export { apiGetTourism } from './service'

export const api = axios.create({
  baseURL: 'https://tdx.transportdata.tw',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
  },
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  config.headers.authorization = `Bearer ${token}`

  return config
}, (error) => {
  return Promise.reject(error)
})

// api.interceptors.response.use((config) => {
//   return config
// }, (error) => {
//   return Promise.reject(error)
// })

// https://tdx.transportdata.tw/api/tourism/service/odata/V2/Tourism/Attraction?%24top=10
// https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token
