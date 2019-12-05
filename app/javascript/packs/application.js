import "bootstrap";

import { getCurrentCoords, addUserPosition } from '../components/currentPosition';
import { currentLocationToForm } from '../components/currentLocationToForm';
import { autocomplete } from '../components/autocomplete'
import {createMap } from '../components/createMap';
import { showRoute } from '../components/showRoute';
import { alertDisplay } from '../components/alertDisplay';
import { addMarkersToMap } from '../components/addMarkersToMap';
import { openNav } from '../components/burger'
import Swal from 'sweetalert2';




document.addEventListener('DOMContentLoaded', function() {
  // BELOW: BURGER MENU
  openNav();


  // BELOW: TRIP SHOW CODE
  const tripShowMap = document.querySelector('#tripMap');
  if(tripShowMap) {
    showRoute(tripShowMap);
  }

  // BELOW: TRIP NEW CODE
  const tripNewMap = document.querySelector("#newMap");
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

  // BELOW: ALERT SHOW CODE
  const alertMap = document.getElementById("alertMap")
  if (alertMap) {
    alertDisplay(alertMap)
  }


  // BELOW: ALERT FLASH CODE
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



})




