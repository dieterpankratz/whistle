import { getCurrentCoords, addUserPosition } from '../components/currentPosition';
import { currentLocationToForm } from '../components/currentLocationToForm';
import {autocomplete} from '../components/autocomplete'
import  createMap  from '../components/createMap';

const mapDiv = document.querySelector("#newMap");

console.log(mapDiv)
document.addEventListener('DOMContentLoaded', function() {
  if (mapDiv) {
    // get current coordinates

    const tripsNew = async () => {
      const coordsPromise = new Promise(getCurrentCoords);
      const coords =  await coordsPromise;
      console.log(coords)
      // create map
      const mapOptions = {
        zoom: 16,
        center: {lat: coords.lat, lng: coords.lng},
        disableDefaultUI: true,
      }

      const createdMap = createMap(mapDiv, mapOptions);


      // add user to map
      addUserPosition(createdMap, coords.lat, coords.lng);

      // add coordinates to form and send to Rails app
      currentLocationToForm(coords.lat, coords.lng, mapDiv)

      autocomplete();

    }

    tripsNew()
  }

})


