function currentLocationToForm() {
  window.addEventListener('DOMContentLoaded', (event) => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const startLat = document.querySelector("#trip_start_lat");
        const startLong = document.querySelector("#trip_start_long");

        const currentLat = position.coords.latitude;
        const currentLong = position.coords.longitude;

        startLat.value = currentLat;
        startLong.value = currentLong;
      });
    }
});
}

export { currentLocationToForm };
