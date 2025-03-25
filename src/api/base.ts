import axios from 'axios'
import { useAuth } from '../composables/'

const { checkTokenExpires, refreshToken } = useAuth()

export const api = axios.create({
  baseURL: 'https://tdx.transportdata.tw',
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(async (config) => {
  const isExpires = checkTokenExpires()

  if (isExpires) {
    await refreshToken()
  }

  const token = localStorage.getItem('token')
  config.headers.authorization = `Bearer ${token}`

  return config
}, (error) => {
  return Promise.reject(error)
})

// api.interceptors.response.use((config) => {
//   return config
// }, async (error) => {
//   if (error.status === 401) {
//     await useAuth()
//     return api.request(error.config)
//   }

//   return Promise.reject(error)
// })
