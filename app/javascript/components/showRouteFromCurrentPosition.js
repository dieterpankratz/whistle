let points = [{}, {}];
let tripMap;
function showRouteFromCurrentPosition() {
  // suppose we want to get the location information continiously, so we use watchPosition.
  // we need global variable to store the id returned by watchPosition method
  var watchId, startLat, startLong;
  var start = 1;
  // I want to have the map as soon as the page loads:
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

    // // check if browser supports HTML5 geolocation
    if (navigator.geolocation) {
      watchId = navigator.geolocation.watchPosition(onSuccess, onError,
        {maximumAge:60*1000,
          timeout:5*60*1000,
          enableHighAccuracy:true});
    }

    function onSuccess(position) {
      const currentLat = position.coords.latitude;
      const currentLong = position.coords.longitude;

      if (start == 1) {
        startLat = currentLat;
        startLong = currentLong;
        start = 0;
      }

      // we need an instance of geocoder class to get readable address out from
      // lat and long (geocoder is a google service for converting between an address and a LatLng):
      var geocoder = new google.maps.Geocoder();
      // a LatLng (class) is a point in geographical coordinates: latitude and longitude:
      const latlong = new google.maps.LatLng
      // var latlong = new google.maps.LatLng(currentLat, currentLong);
      const latlng = {lat: currentLat, lng: currentLong};
      // geocode(request, callback) method:
      geocoder.geocode({'location': latlng}, function(results, status) {
        console.log({status})
        if (status === 'OK') {
          if (results[0]) {
            document.getElementById('address').innerHTML = results[0].formatted_address;
          } else {
            window.alert('No results found');
          }
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
      });

      // wait until the content of the page is loaded:
      // points[0] is current location. points[1] is destination.
      points[0].lat = startLat;   // document.querySelector("#start_lat").innerHTML;
      points[0].long = startLong; // document.querySelector("#start_long").innerHTML;
      points[1].lat = document.querySelector("#end_lat").innerHTML;
      points[1].long = document.querySelector("#end_long").innerHTML;

      var mapOptions = {
        // LatLng class representing a pair of latitude and longitude coordinates, stored as degrees.
        center: new google.maps.LatLng(points[0].lat, points[0].long),
        zoom: 10
      }

      var tripMap = new google.maps.Map(document.getElementById("tripMap"), mapOptions)
      var latlngbounds = new google.maps.LatLngBounds();

      for(var i=0;i<points.length;i++) {
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(points[i].lat, points[i].long),
          map: tripMap
        });
        latlngbounds.extend(marker.position)
      }

      tripMap.fitBounds(latlngbounds);

      drawPath();
    }
  }
}

function drawPath() {
  var directionsService = new google.maps.DirectionsService();
  var directionsRenderer = new google.maps.DirectionsRenderer();

  var mapOptions = {
    center: new google.maps.LatLng(points[0].lat,points[0].long),
    zoom: 15,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false
  }

  tripMap = new google.maps.Map(document.getElementById("tripMap"), mapOptions)
  directionsRenderer.setMap(tripMap);

  var poly = new google.maps.Polyline({strokeColor:"#085F63", strokeWeight:4})

  var request = {
    origin: new google.maps.LatLng(points[0].lat, points[0].long),
    destination: new google.maps.LatLng(points[1].lat, points[1].long),
    travelMode: 'WALKING'
  };

  directionsService.route(request, function(response, status){
    if (status == google.maps.DirectionsStatus.OK) {
      new google.maps.DirectionsRenderer({
        map: tripMap,
        polylineOptions: poly,
        directions: response
      });
    }
  });
}

export { showRouteFromCurrentPosition };
