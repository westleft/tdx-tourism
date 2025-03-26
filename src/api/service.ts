import { api } from '.'

export const apiGetTourism = <T>(option: {
  type: string
  query: string
}) => api.get<T>(`api/tourism/service/odata/V2/Tourism/${option.type}${option.query}`)
