import {addAMarker} from './addMarkersToMap'
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

  const aMarker = "https:res.cloudinary.com/frijolyfrailejon/image/upload/c_scale,w_40/v1575361660/a_mark_i4ty4x.png";
  const bMarker = "https://res.cloudinary.com/frijolyfrailejon/image/upload/c_scale,w_40/v1575361874/b_mark_lc2rad.png";
  addAMarker(startingCoords, tripMap, aMarker);
  addAMarker(destinationCoords, tripMap, bMarker);

  drawPath(tripMap, points);

  // 1. get coords from helpers (from alerts#show)
  const responseMap = document.getElementById('tripMap');
  const responderMarkers = JSON.parse(responseMap.dataset.markers);
  // console.log(responderMarkers);
  const helperMarker = 'https://res.cloudinary.com/pankratz117/image/upload/v1575369256/blue_helper_v1_ale3uk.png';
  console.log({helperMarker})
  addMarkersToMap(responderMarkers, tripMap, helperMarker);

}


export { alertDisplay };
