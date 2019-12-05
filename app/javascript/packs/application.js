import "bootstrap";
import '../components/burger';

import { getCurrentCoords, addUserPosition } from '../components/currentPosition';
import { currentLocationToForm } from '../components/currentLocationToForm';
import {autocomplete} from '../components/autocomplete'
import  createMap  from '../components/createMap';
import { showRoute } from '../components/showRoute';
import { alertDisplay } from '../components/alertDisplay'
import Swal from 'sweetalert2';




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
      const mapOptions = {
        zoom: 16,
        center: {lat: coords.lat, lng: coords.lng},
        disableDefaultUI: true,
      }

      const createdMap = createMap(tripNewMap, mapOptions);


      // add user to map
      addUserPosition(createdMap, coords.lat, coords.lng);

      // add coordinates to form and send to Rails app
      currentLocationToForm(coords.lat, coords.lng, tripNewMap)

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



const showTripForm = document.querySelector('.show-trip-form');
if(showTripForm) {
  showTripForm.addEventListener('submit', event => {
    event.preventDefault();
     Swal.fire({
        position: 'center',
        title: 'Itinerary shared with your friends !',
        showConfirmButton: false,
        height: 500,
        padding: 100,
        timer: 1500
    })
     setTimeout(() => {
      showTripForm.submit();

     }, 1500)
  });

}

const alertWhistleForm = document.querySelector('.alert-whistle-form');
if(alertWhistleForm) {
  alertWhistleForm.addEventListener('submit', event => {
    event.preventDefault();
     Swal.fire({
        position: 'center',
        title: 'Looking for friends nearby !',
        showConfirmButton: false,
        height: 500,
        padding: 100,
        timer: 2000
    })
     setTimeout(() => {
      alertWhistleForm.submit();

     }, 2000)
  });
}

const safeForm = document.querySelector('.safe-form');
if(safeForm) {
  safeForm.addEventListener('submit', event => {
    event.preventDefault();
     Swal.fire({
        position: 'center',
        title: "Happy that you're safe!",
        showConfirmButton: false,
        height: 500,
        padding: 100,
        timer: 1500
    })
     setTimeout(() => {
      safeForm.submit();

     }, 1500)
  });
}



