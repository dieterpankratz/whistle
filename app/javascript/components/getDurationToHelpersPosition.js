const getDurationToHelpersPosition = (startCoord, endCoord) => {
  let directionsService = new google.maps.DirectionsService();
  const request = {
    origin: new google.maps.LatLng(startCoord.lat, startCoord.long),
    destination: new google.maps.LatLng(endCoord.lat, endCoord.long),
    travelMode: 'WALKING'
  };


  const durationTime = (resolve, reject) => {
   directionsService.route(request, function(response, status){
       resolve(response.routes[0].legs[0].duration.value);
    });
  }
  const durationTimePromise = new Promise(durationTime);

  return durationTimePromise;
}


export { getDurationToHelpersPosition };

