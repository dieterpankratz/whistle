import { getCurrentCoords, addUserPosition } from '../components/currentPosition';
import { currentLocationToForm } from '../components/currentLocationToForm';
import {autocomplete} from '../components/autocomplete';
import  { createMap}   from '../components/createMap';
import { addMarkersToMap}  from '../components/addMarkersToMap';

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
      addMarkersToMap(shelters, createdMap, shelterLogo);


      // add user to map
      addUserPosition(createdMap, coords.lat, coords.lng);

      // add coordinates to form and send to Rails app
      currentLocationToForm(coords.lat, coords.lng, mapDiv)

      autocomplete();

    }

    tripsNew();
  }

});


