import {addAMarker} from './addMarkersToMap'
import {addMarkersToMap} from './addMarkersToMap'
import {addHelperToMap} from './addMarkersToMap'
import {drawPath} from './showRoute'
import createMap from './createMap'
import {tripCoordinates} from './tripCoordinates'
import {getCurrentCoords, addUserPosition, addWhistlePosition} from './currentPosition'
import { getDurationToHelpersPosition } from './getDurationToHelpersPosition'
const alertDisplay = async (map) => {
  const points = tripCoordinates();



  // create map for trip
  var mapOptions = {
    // LatLng class representing a pair of latitude and longitude coordinates, stored as degrees.
    center: new google.maps.LatLng(points[0].lat, points[0].long),
    zoom: 13
  }
  const tripMap =  createMap(map, mapOptions)


 const shelterLogo = 'https://res.cloudinary.com/dzqtwmsqg/image/upload/v1575468104/shelter_5_sthdlw.png';


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

    // get the duration from helper:
  let durationHelper1 = await getDurationToHelpersPosition({lat: 52.532023, long: 13.40112}, {lat: 52.535172, long: 13.405950});
  let durationHelper2 = await getDurationToHelpersPosition({lat: 52.532023, long: 13.40112}, {lat: 52.529119, long: 13.395488});
  const durationString1 = Math.round((durationHelper1/60)).toString() + " Min";
  const durationString2 = Math.round((durationHelper2/60)).toString() + " Min";
  console.log(durationString1);
  console.log(durationString2);

  // 1. get coords from helpers (from alerts#show)
  const responseMap = document.getElementById('tripMap');
  const responderMarkers = JSON.parse(responseMap.dataset.markers);
  const helperMarker = 'https://res.cloudinary.com/frijolyfrailejon/image/upload/c_scale,w_50/v1575452323/helper_pfrd6b.png';
  addHelperToMap(responderMarkers[0], tripMap, helperMarker, durationString1);
  addHelperToMap(responderMarkers[1], tripMap, helperMarker, durationString2);




  // starting, ending positions
  const aMarker = "https://res.cloudinary.com/frijolyfrailejon/image/upload/c_scale,w_40/v1575452323/a-marker_snmd0w.png";
  const bMarker = "https://res.cloudinary.com/frijolyfrailejon/image/upload/c_scale,w_40/v1575452323/b-marker_tdfu6g.png";
  addAMarker(points[0], tripMap, aMarker);
  addAMarker(points[1], tripMap, bMarker);

  // draw path between starting and ending
  drawPath(tripMap, points);





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
