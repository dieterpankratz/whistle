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

    const shelterLogo = 'https://res.cloudinary.com/pankratz117/image/upload/v1575277537/establishement_bdwjlo.png';

  const shelters = [
    {
      lat: 52.527514,
      long: 13.398103
    },
    {
      lat: 52.531556,
      long: 13.388505
    },
    {
      lat: 52.533081,
      long: 13.399919
    },
    {
      lat: 52.530068,
      long: 13.400792
    },
    {
      lat: 52.531662,
      long: 13.394106
    }
  ];


  addMarkersToMap(shelters, tripMap, shelterLogo)


  // starting, ending positions
  const aMarker = "https://res.cloudinary.com/frijolyfrailejon/image/upload/c_scale,w_40/v1575383219/a_mark_1_rcpfya.png";
  const bMarker = "https://res.cloudinary.com/frijolyfrailejon/image/upload/c_scale,w_40/v1575383219/b_mark_1_km2ctd.png";
  addAMarker(points[0], tripMap, aMarker);
  addAMarker(points[1], tripMap, bMarker);

  // draw path between starting and ending
  drawPath(tripMap, points);

  // 1. get coords from helpers (from alerts#show)
  const responseMap = document.getElementById('tripMap');
  const responderMarkers = JSON.parse(responseMap.dataset.markers);

  // add coordinates of helpers to map
  const helperMarker = 'https://res.cloudinary.com/frijolyfrailejon/image/upload/c_scale,w_50/v1575383219/helper_1_gg4gvn.png';
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
