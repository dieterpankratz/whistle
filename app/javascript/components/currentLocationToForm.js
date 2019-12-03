function currentLocationToForm(latitude, longitude, mapDiv) {
  const latElement = document.querySelector("#trip_start_lat");
  const longElement = document.querySelector("#trip_start_long");
  mapDiv.setAttribute("data-latitude", latitude);
  mapDiv.setAttribute("data-longitude", longitude);
  latElement.value = latitude;
  longElement.value = longitude;
}

export { currentLocationToForm };
