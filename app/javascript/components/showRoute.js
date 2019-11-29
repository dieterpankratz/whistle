let points = [{}, {}];
let tripMap;
function showRoute() {
  // wait until the content of the page is loaded:
  // points[0] is current location. points[1] is destination.
  points[0].lat = document.querySelector("#start_lat").innerHTML;
  points[0].long = document.querySelector("#start_long").innerHTML;
  points[1].lat = document.querySelector("#end_lat").innerHTML;
  points[1].long = document.querySelector("#end_long").innerHTML;

  var mapOptions = {
    // LatLng class representing a pair of latitude and longitude coordinates, stored as degrees.
    center: new google.maps.LatLng(points[0].lat,points[0].long),
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

function drawPath() {
  var directionsService = new google.maps.DirectionsService();
  var directionsRenderer = new google.maps.DirectionsRenderer();

  var mapOptions = {
    center: new google.maps.LatLng(points[0].lat,points[0].long),
    zoom: 10
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

export { showRoute };
