import {addAMarker} from './addMarkersToMap'
import {addMarkersToMap} from './addMarkersToMap'
import {addHelperToMap} from './addMarkersToMap'
import {drawPath} from './showRoute'
import {createMap} from './createMap'
import {tripCoordinates} from './tripCoordinates'
import {getCurrentCoords, addUserPosition, addWhistlePosition} from './currentPosition'
import { getDurationToHelpersPosition } from './getDurationToHelpersPosition'

const alertDisplay = async (map) => {
  const points = tripCoordinates();

    console.log(google)
  // create map for trip
  var mapOptions = {
    // LatLng class representing a pair of latitude and longitude coordinates, stored as degrees.
    center: new google.maps.LatLng(points[0].lat, points[0].long),
    zoom: 13
  }
  const tripMap =  createMap(map, mapOptions);


 const shelterLogo = 'https://res.cloudinary.com/dzqtwmsqg/image/upload/v1575538481/Group_2_1_easwbj.svg';


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

  const responderMarkers = JSON.parse(map.dataset.markers);
  if(responderMarkers.length) {
    // get the duration from helper:
    let durationHelper1 = await getDurationToHelpersPosition({lat: 52.532023, long: 13.40112}, {lat: 52.535172, long: 13.405950});
    let durationHelper2 = await getDurationToHelpersPosition({lat: 52.532023, long: 13.40112}, {lat: 52.529119, long: 13.395488});
    const durationString1 = "Chloé " + Math.round((durationHelper1/60)).toString() + " min";
    const durationString2 = "Morgane " + Math.round((durationHelper2/60)).toString() + " min";
    console.log(durationString1);
    console.log(durationString2);

    // 1. get coords from helpers (from alerts#show)
    const helperMarker = 'https://res.cloudinary.com/dzqtwmsqg/image/upload/v1575539270/helpers-def_1_ut5avl.svg';
    addHelperToMap(responderMarkers[0], tripMap, helperMarker, durationString1);
    addHelperToMap(responderMarkers[1], tripMap, helperMarker, durationString2);

  }

  // starting, ending positions
  const aMarker = "https://res.cloudinary.com/dzqtwmsqg/image/upload/v1575539619/A2_1_esqi8d.svg";
  const bMarker = "https://res.cloudinary.com/dzqtwmsqg/image/upload/v1575539622/B2_1_hphvjs.svg";
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
    addWhistlePosition(tripMap, 52.5324076, 13.3948529)
  }

}


export { alertDisplay };
