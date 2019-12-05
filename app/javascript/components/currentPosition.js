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


  const currPushPin = 'https://res.cloudinary.com/dzqtwmsqg/image/upload/v1575538922/Group_1_1_qlzgqy.svg'
  const currentMarker = new google.maps.Marker({
    position: currentLatLong,
    map: map,
    icon: currPushPin,
    animation: google.maps.Animation.DROP
  });
}


const addWhistlePosition = (map, latitude, longitude) => {
  const currentLatLong = new google.maps.LatLng(latitude, longitude);


  const currPushPin = 'https://res.cloudinary.com/dzqtwmsqg/image/upload/v1575538922/Group_1_1_qlzgqy.svg'
  const currentMarker = new google.maps.Marker({
    position: currentLatLong,
    map: map,
    icon: currPushPin,
    animation: google.maps.Animation.BOUNCE
  });
}


export { getCurrentCoords, addUserPosition, addWhistlePosition };
