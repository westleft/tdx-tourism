import { api } from '.'

export const apiGetTourism = <T>(query: string) => api.get<T>(`api/tourism/service/odata/V2/Tourism/Attraction${query}`)
