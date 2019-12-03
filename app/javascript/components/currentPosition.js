import createMap from './createMap'
import {currentLocationToForm} from './currentLocationToForm'
const currentPosition = (map) => {
  // we need an instance of geocoder class to get readable address out from
  // lat and long (geocoder is a google service for converting between an address and a LatLng):
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  } else {
    alert("Your browser doesn't support geolocation.");
  }

  function onSuccess(position) {
      map.setAttribute("data-latitude", position.coords.latitude);
      map.setAttribute("data-longitude", position.coords.longitude);

      addUserPosition(map);

      const startLat = document.querySelector("#trip_start_lat");
      const startLong = document.querySelector("#trip_start_long");
      currentLocationToForm(startLat, startLong, position)
  }

  function onError() {
    console.log('getCurrentPosition error');
  }
}

function addUserPosition(map) {
  const currentLat = parseFloat(map.dataset.latitude);
  const  currentLong = parseFloat(map.dataset.longitude);
  const currentLatLong = new google.maps.LatLng(currentLat, currentLong);
  const mapOptions = {
    zoom: 16,
    center: currentLatLong,
    disableDefaultUI: true,
  }


  const createdMap = createMap(map, mapOptions);

// Add User Map Marker
  const currPushPin = 'https://res.cloudinary.com/pankratz117/image/upload/v1575142232/current_position_marker_e4jnlm.png'
  const currentMarker = new google.maps.Marker({
    position: currentLatLong,
    map: createdMap,
    icon: currPushPin
  });
}

export { currentPosition };
