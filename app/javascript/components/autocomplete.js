function autocomplete() {
  document.addEventListener("DOMContentLoaded", function() {
    var destination = document.getElementById('end_point');

    if (destination) {
      var autocomplete = new google.maps.places.Autocomplete(destination, { types: [ 'geocode' ] });
      google.maps.event.addDomListener(destination, 'keydown', function(e) {
        if (e.key === "Enter") {
          e.preventDefault(); // Do not submit the form on Enter.
        }
      });
    }
  });
}

export { autocomplete };
