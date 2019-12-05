import { styles } from './mapStyles'
const createMap = (mapElement, options = {}) => {
  const mapOptions = {
    ...options,
    styles,
    disableDefaultUI: true
  }
  console.log(mapElement)
  const newMap = new google.maps.Map(mapElement, mapOptions);
  return newMap
}

export { createMap };
