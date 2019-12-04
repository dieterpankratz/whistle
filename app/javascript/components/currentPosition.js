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


  const currPushPin = 'https://res.cloudinary.com/frijolyfrailejon/image/upload/c_scale,w_40/v1575447337/Group_1_1_iqbse2.png'
  const currentMarker = new google.maps.Marker({
    position: currentLatLong,
    map: map,
    icon: currPushPin,
    animation: google.maps.Animation.DROP
  });
}


const addWhistlePosition = (map, latitude, longitude) => {
  const currentLatLong = new google.maps.LatLng(latitude, longitude);


  const currPushPin = 'https://res.cloudinary.com/frijolyfrailejon/image/upload/c_scale,w_40/v1575452323/whistle_mbzpwr.png'
  const currentMarker = new google.maps.Marker({
    position: currentLatLong,
    map: map,
    icon: currPushPin,
    animation: google.maps.Animation.BOUNCE
  });
}


export { getCurrentCoords, addUserPosition, addWhistlePosition };
