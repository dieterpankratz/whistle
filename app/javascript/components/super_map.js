// const loadGoogleMapsApi = require('load-google-maps-api');
import loadGoogleMapsApi from "load-google-maps-api";

class SuperMap {

  static loadGoogleMapsApi() {
    const apiKey = document.querySelector('meta[name="GOOGLE_API_SERVER_KEY"]').content
    return loadGoogleMapsApi({ key: apiKey });
  }
  static createMap(googleMaps, mapElement, options) {
    return new googleMaps
    // return new googleMaps.Map(mapElement, options);
  }
}
export { SuperMap };


// const mapDiv = document.querySelector("#newMap");
// document.addEventListener("DOMContentLoaded", function() {
//   // let mapElement = document.getElementById('map');

//   SuperMap.loadGoogleMapsApi().then(function(googleMaps) {
//     const something = SuperMap.createMap(googleMaps, mapDiv);
//     console.log(something)
//   });
// });
