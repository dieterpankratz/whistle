import "bootstrap";
import '../components/burger';

import { getCurrentCoords, addUserPosition } from '../components/currentPosition';
import { currentLocationToForm } from '../components/currentLocationToForm';
import { autocomplete } from '../components/autocomplete'
import {createMap } from '../components/createMap';
import { showRoute } from '../components/showRoute';
import { alertDisplay } from '../components/alertDisplay';
import { addMarkersToMap } from '../components/addMarkersToMap';


// trips show

const tripShowMap = document.querySelector('#tripMap')

if(tripShowMap) {
  showRoute(tripShowMap);
}




// trips new

const tripNewMap = document.querySelector("#newMap");

console.log(tripNewMap)
document.addEventListener('DOMContentLoaded', function() {
  if (tripNewMap) {
    // get current coordinates

    const tripsNew = async () => {
      const coordsPromise = new Promise(getCurrentCoords);
      const coords =  await coordsPromise;
      console.log(coords)
      // create map
      console.log("creating map from app.js");
      const mapOptions = {
        zoom: 16,
        center: {lat: coords.lat, lng: coords.lng},
        disableDefaultUI: true,
      }

      const createdMap = createMap(tripNewMap, mapOptions);
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
       console.log('shelters', shelters);

      // add user to map
      addUserPosition(createdMap, coords.lat, coords.lng);

      // add coordinates to form and send to Rails app
      currentLocationToForm(coords.lat, coords.lng, tripNewMap)

      addMarkersToMap(shelters, createdMap, shelterLogo);
      autocomplete();

    }

    tripsNew()
  }

})



// alert show



const alertMap = document.getElementById("alertMap")
if (alertMap) {
  alertDisplay(alertMap)
}



