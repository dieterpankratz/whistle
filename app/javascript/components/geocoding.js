window.onload = function() {
  function onError(error) {
    switch(error.code) {
      case PERMISSION_DENIED:
        alert('user denied permission');
        break;
      case TIMEOUT:
        alert('geolocation timed out');
        break;
      case POSITION_UNAVAILABLE:
        alert('Geolocation information is not available');
        break;
      default:
        alert('unknown error');
        break;
    }
  }

  // suppose we want to get the location information continiously, so we use watchPosition.
  // we need global variable to store the id returned by watchPosition method
  var watchId, startLat, startLong;
  var start = 1;
  I want to have the map as soon as the page loads:

      // we need an instance of geocoder class to get readable address out from
      // lat and long (geocoder is a google service for converting between an address and a LatLng):
      var geocoder = new google.maps.Geocoder();
      // a LatLng (class) is a point in geographical coordinates: latitude and longitude:
      const latlong = new google.maps.LatLng
      // var latlong = new google.maps.LatLng(currentLat, currentLong);
      const latlng = {lat: currentLat, lng: currentLong};
      geocode(request, callback) method:



  // check if browser supports HTML5 geolocation
  if (navigator.geolocation) {
    watchId = navigator.geolocation.watchPosition(onSuccess, onError,
      {
        maximumAge:60*1000,
        timeout:5*60*1000,
        enableHighAccuracy:true
      }
    );
  }

  function onSuccess(position) {
    const currentLat = position.coords.latitude;
    const currentLong = position.coords.longitude;
    console.log({currentLat, currentLong})
    if (start == 1) {
      startLat = currentLat;
      startLong = currentLong;
      start = 0;
    }
  }
}
