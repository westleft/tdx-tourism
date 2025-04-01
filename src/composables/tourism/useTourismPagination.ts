// src/composables/useTourismPagination.ts
export const useTourismPagination = () => {
  const query = {
    top: 20,
    skip: 0,
  }

  const setQuery = (
    key: keyof typeof query,
    value: typeof query[keyof typeof query],
  ) => {
    query[key] = value
  }

  return { query, setQuery }
}
