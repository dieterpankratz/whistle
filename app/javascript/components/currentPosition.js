function currentPosition() {
  // suppose we want to get the location information continiously, so we use watchPosition.
  // we need global variable to store the id returned by watchPosition method
  var watchId;
  // I want to have the map as soon as the page loads:
  window.onload = function() {

    // check if browser supports HTML5 geolocation
    if(navigator.geolocation) {
      watchId = navigator.geolocation.watchPosition(onSuccess, onError,
        {maximumAge:60*1000,
          timeout:5*60*1000,
          enableHighAccuracy:true});
    }
  }

  function onSuccess(position) {
    var currentLat = position.coords.latitude;
    var currentLong = position.coords.longitude;

    document.getElementById('map').innerHTML = currentLat + " " + currentLong;
  }

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
        alert('unlknown error');
        break;
    }
  }
}


export { currentPosition };
