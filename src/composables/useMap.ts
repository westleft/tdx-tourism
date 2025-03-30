import L from 'leaflet'

export const useMap = (id: string, option: {
  PositionLat: number
  PositionLon: number
}) => {
  const { PositionLat, PositionLon } = option

  const map = L.map(id).setView([PositionLat, PositionLon], 14)
  const marker = L.marker([PositionLat, PositionLon]).addTo(map)
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map)

  // marker.bindPopup('Hello world!I am a popup.').openPopup()
}
