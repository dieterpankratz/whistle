
import createMap from './createMap'
import {addAMarker} from './addMarkersToMap'
import {addMarkersToMap} from './addMarkersToMap'


let coordinatesArray = [];
let destinationLat = document.querySelector("#end_lat");
let destinationLong= document.querySelector("#end_long");
let startLat = document.querySelector("#start_lat")
let startLong = document.querySelector("#start_long")
function showRoute(map) {
  // wait until the content of the page is loaded:
  // points[0] is current location. points[1] is destination.

  const startingCoords = {
    lat: parseFloat(startLat.innerHTML),
    long: parseFloat(startLong.innerHTML)
  }
  // add starting coords to points array
  coordinatesArray.push(startingCoords)

  const destinationCoords = {
    lat: parseFloat(destinationLat.innerHTML),
    long: parseFloat(destinationLong.innerHTML)

  }
  // add destination coords to coordinatesArray array

  coordinatesArray.push(destinationCoords)

  const mapOptions = {
    // LatLng class representing a pair of latitude and longitude coordinates, stored as degrees.
    center: new google.maps.LatLng(coordinatesArray[0].lat,coordinatesArray[0].long),
    zoom: 10
  }

  const tripMap = createMap(map, mapOptions);


  const shelterLogo = 'https://res.cloudinary.com/pankratz117/image/upload/v1575277537/establishement_bdwjlo.png';

  const shelters = [
    {
      lat: 52.527514,
      lng: 13.398103
    },
    {
      lat: 52.531556,
      lng: 13.388505
    },
    {
      lat: 52.533081,
      long: 13.399919
    },
    {
      lat: 52.530068,
      lng: 13.400792
    },
    {
      lat: 52.531662,
      lng: 13.394106
    }
  ];


  addMarkersToMap(shelters, tripMap, shelterLogo)

  const aMarker = 'https://res.cloudinary.com/frijolyfrailejon/image/upload/c_scale,w_40/v1575305309/a_marker_womayg.png';
  const bMarker = 'https://res.cloudinary.com/frijolyfrailejon/image/upload/c_scale,w_40/v1575305309/b_marker_gik9qj.png';
  addAMarker(startingCoords, tripMap, aMarker);
  addAMarker(destinationCoords, tripMap, bMarker);
  drawPath(tripMap, coordinatesArray);

}


function drawPath(map, coordinates) {
  var directionsService = new google.maps.DirectionsService();
  var directionsRenderer = new google.maps.DirectionsRenderer();
  var mapOptions = {
    center: new google.maps.LatLng(coordinates[0].lat,coordinates[0].long),
    zoom: 15,
  }

  // map generated from createMap.js
  const createdMap = createMap(map, mapOptions)
  directionsRenderer.setMap(createdMap);

  var poly = new google.maps.Polyline({strokeColor:"#085F63", strokeWeight:4})
  var request = {
    origin: new google.maps.LatLng(coordinates[0].lat, coordinates[0].long),
    destination: new google.maps.LatLng(coordinates[1].lat, coordinates[1].long),
    travelMode: 'WALKING'
  };

  directionsService.route(request, function(response, status){
    if (status == google.maps.DirectionsStatus.OK) {
      new google.maps.DirectionsRenderer({
        map: map,
        polylineOptions: poly,
        directions: response,
        suppressMarkers: true
      });
    }
  });

}


export {drawPath}
export { showRoute };

