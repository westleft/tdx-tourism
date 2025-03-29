export interface ApiResponseWrapper<T> {
  value: T
}

export interface CommonTourismItem {
  Description: string
  name: string
  Images: {
    Name: string
    URL: string
  }[]
  PostalAddress: {
    City: string
    Town: string
    StreetAddress: string
  }
  TrafficInfo: string
  Telephones: {
    Tel: string
  }[]
  ParkingInfo: string
  PositionLat: number
  PositionLon: number
  Remarks: string
  ServiceTimeInfo: string
}

export interface AttractionItem extends CommonTourismItem {
  AttractionID: string
  AttractionName: string
}

export interface RestaurantItem extends CommonTourismItem {
  RestaurantID: string
  RestaurantName: string
}

export interface EventItem extends CommonTourismItem {
  EventID: string
  EventName: string
}

export type TourismItem = AttractionItem & RestaurantItem & EventItem
