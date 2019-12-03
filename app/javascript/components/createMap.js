import { styles } from './mapStyles'
const createMap = (mapElement, options = {}) => {
  const mapOptions = {
    ...options,
    styles,
    disableDefaultUI: true,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
  }
  const newMap = new google.maps.Map(mapElement, mapOptions);
  return newMap
}

export default createMap;
