export const API_KEY = 'e539b3dcdce62f43d0c9eac4ff2b6ab4';
export const API_URL = 'http://api.openweathermap.org/data/2.5/weather';
export const DEFAULT_PLACE = {
  lat: 55.75,
  lon: 37.61,
  placeName: 'Moscow, Russia',
};

export default function buildPlacesUrl(lat, lon) {
  return `${API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
}
