import {addAMarker} from './addMarkersToMap'
import {addMarkersToMap} from './addMarkersToMap'
import {drawPath} from './showRoute'
import createMap from './createMap'
import {tripCoordinates} from './tripCoordinates'
import {getCurrentCoords, addUserPosition, addWhistlePosition} from './currentPosition'
const alertDisplay = async (map) => {
  const points = tripCoordinates();



  // create map for trip
  var mapOptions = {
    // LatLng class representing a pair of latitude and longitude coordinates, stored as degrees.
    center: new google.maps.LatLng(points[0].lat, points[0].long),
    zoom: 10
  }
  const tripMap =  createMap(map, mapOptions)

  // starting, ending positions
  const aMarker = "https://res.cloudinary.com/frijolyfrailejon/image/upload/c_scale,w_40/v1575452323/a-marker_snmd0w.png";
  const bMarker = "https://res.cloudinary.com/frijolyfrailejon/image/upload/c_scale,w_40/v1575452323/b-marker_tdfu6g.png";
  addAMarker(points[0], tripMap, aMarker);
  addAMarker(points[1], tripMap, bMarker);

  // draw path between starting and ending
  drawPath(tripMap, points);

  // 1. get coords from helpers (from alerts#show)
  const responseMap = document.getElementById('tripMap');
  const responderMarkers = JSON.parse(responseMap.dataset.markers);

  // add coordinates of helpers to map
  const helperMarker = 'https://res.cloudinary.com/frijolyfrailejon/image/upload/c_scale,w_50/v1575452323/helper_pfrd6b.png';
  addMarkersToMap(responderMarkers, tripMap, helperMarker);



  // add user's current Position to map
  const alertKind = document.getElementById('alert_kind').innerHTML;
  if (alertKind === "whistle") {
    const coordsPromise = new Promise(getCurrentCoords);
    const coords =  await coordsPromise;
    console.log({coords})
    addWhistlePosition(tripMap, 52.532023, 13.40112)
  }
}


export { alertDisplay };
