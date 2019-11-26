function getPosition() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successPosition);
    }
    else
     document.getElementById("result").innerHTML = "Your Browser does not support Geolocation API!!!"
}

  function successPosition(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;

    document.getElementById("result").innerHTML = "Latitude: " + lat + "<br />Longitude: " + long;
}

export { getPosition };
export { successPosition };
