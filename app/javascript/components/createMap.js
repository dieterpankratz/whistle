import { styles } from './mapStyles'
const createMap = (mapElement, options = {}) => {
  const mapOptions = {
    ...options,
    styles,
    disableDefaultUI: true
  }
  const newMap = new google.maps.Map(mapElement, mapOptions);
  return newMap
}

export { createMap };
