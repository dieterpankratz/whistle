function getPosition() {
    // the navigator.geolocation returns a geolocation object that gives web content access
    // to the location of the device
    if(navigator.geolocation) {
      // getCurrentPosition is used to get current position of device. It has a call-back function
      // as an argument. successPosition has a position object as its parameter. This position object
      // will have all the details we require: coords & timestamp.
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
