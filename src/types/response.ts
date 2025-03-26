export interface ApiResponseWrapper<T> {
  value: T
}

export interface TourismItem {
  id: string
  name: string
}

export interface AttractionItem {
  AttractionID: string
  AttractionName: string
  Images: {
    Name: string
    URL: string
  }[]
  PostalAddress: {
    City: string
    Town: string
  }
}

export interface RestaurantItem {
  RestaurantID: string
  RestaurantName: string
  Images: {
    Name: string
    URL: string
  }[]
  PostalAddress: {
    City: string
    Town: string
  }
}

export interface EventItem {
  EventID: string
  EventName: string
  Images: {
    Name: string
    URL: string
  }[]
  PostalAddress: {
    City: string
    Town: string
  }
}
