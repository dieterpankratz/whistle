import {addMarkersToMap} from './addMarkersToMap'
import {drawPath} from './showRoute'
import createMap from './createMap'
const alertDisplay = (map) => {
  const points = [];
  let destinationLat = document.querySelector("#end_lat");
  let destinationLong= document.querySelector("#end_long");
  let startLat = document.querySelector("#start_lat")
  let startLong = document.querySelector("#start_long")


  const startingCoords = {
    lat: parseFloat(startLat.innerHTML),
    long: parseFloat(startLong.innerHTML)
  }

  // add starting coords to points array
  points.push(startingCoords)

  const destinationCoords = {
    lat: parseFloat(destinationLat.innerHTML),
    long: parseFloat(destinationLong.innerHTML)

  }
  // add destination coords to coordinatesArray array

  points.push(destinationCoords)

  var mapOptions = {
    // LatLng class representing a pair of latitude and longitude coordinates, stored as degrees.
    center: new google.maps.LatLng(points[0].lat, points[0].long),
    zoom: 10
  }
  const tripMap =  createMap(map, mapOptions)

  addMarkersToMap(points, tripMap)

  drawPath(tripMap, points);
}


export { alertDisplay };
