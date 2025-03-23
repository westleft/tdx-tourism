import { apiGetAccessToken } from '../api'
import { useSafeParse } from '../composables'
import { TokenResponseSchema } from '../types'

const CLIENT_ID = import.meta.env.PUBLIC_CLIENT_ID || ''
const CLIENT_SECRET = import.meta.env.PUBLIC_CLIENT_SECRET || ''

export const useAuth = async () => {
  try {
    const response = await apiGetAccessToken({
      grant_type: 'client_credentials',
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    })

    const vaildResponse = useSafeParse(TokenResponseSchema, response.data)
    const token = vaildResponse.access_token
    localStorage.setItem('token', token)
  } catch (e: any) {
    throw new Error(e)
  }
}
