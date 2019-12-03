import {currentLocationToForm} from './currentLocationToForm'


const getCurrentCoords = (resolve, reject) => {
  let lng;
  let lat;
  let coordinates;
  if(navigator.geolocation) {

    navigator.geolocation.getCurrentPosition((position) => {
      lng = position.coords.longitude;
      lat = position.coords.latitude;
       resolve({lat, lng});
     }, onError);

  } else {
    alert("Your browser doesn't support geolocation.");
  }
   const onError = () => {
    console.log('getCurrentPosition error');
  }

}

const addUserPosition = (map, latitude, longitude) => {
  const currentLatLong = new google.maps.LatLng(latitude, longitude);


  const currPushPin = 'https://res.cloudinary.com/pankratz117/image/upload/v1575142232/current_position_marker_e4jnlm.png'
  const currentMarker = new google.maps.Marker({
    position: currentLatLong,
    map: map,
    icon: currPushPin
  });
}

export { getCurrentCoords, addUserPosition };
