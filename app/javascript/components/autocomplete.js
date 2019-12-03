function autocomplete() {
    var destination = document.getElementById('trip_end_point');
    var defaultBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(52.520008, 13.404954),
        new google.maps.LatLng(52.520008, 13.404954),
        );
    const options = {
      types: [ 'geocode' ],
      bounds: defaultBounds,
      strictBounds: true
    }
    if (destination) {
      const autoComplete = new google.maps.places.Autocomplete(destination,options);

      google.maps.event.addDomListener(destination, 'keydown', function(e) {
        if (e.key === "Enter") {
          e.preventDefault(); // Do not submit the form on Enter.
        }
      });
    }
}

export { autocomplete };
