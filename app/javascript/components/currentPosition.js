function currentPosition() {
  // we need an instance of geocoder class to get readable address out from
  // lat and long (geocoder is a google service for converting between an address and a LatLng):
  let startLat, startLong;
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  } else {
    alert("Your browser doesn't support geolocation.");
  }

  function onSuccess(pos) {
      document.querySelector("#newMap").setAttribute("latitude", pos.coords.latitude);
      document.querySelector("#newMap").setAttribute("longitude", pos.coords.longitude);
      currentPositionMap();
  }

  function onError() {
    console.log('getCurrentPosition error');
  }
}

function currentPositionMap() {
  const currentLat = document.querySelector("#newMap").getAttribute("latitude");
  const  currentLong = document.querySelector("#newMap").getAttribute("longitude");
  const currentLatLong = new google.maps.LatLng(currentLat, currentLong);

  const newMap = new google.maps.Map(document.querySelector("#newMap"), {
    zoom: 16,
    center: currentLatLong,
    disableDefaultUI: true
  });

  const currPushPin = 'https://res.cloudinary.com/pankratz117/image/upload/v1575142232/current_position_marker_e4jnlm.png'
  const currentMarker = new google.maps.Marker({
    position: currentLatLong,
    map: newMap,
    icon: currPushPin
  });

  const shelterLogo = 'https://res.cloudinary.com/pankratz117/image/upload/v1575277537/establishement_bdwjlo.png';

  const establishments = [
    {
      position: new google.maps.LatLng(52.507550, 13.390590),
      type: 'shelterLogo'
    },
    {
      position: new google.maps.LatLng(52.506710, 13.393170),
      type: 'shelterLogo'
    },
    {
      position: new google.maps.LatLng(52.508100, 13.392410),
      type: 'shelterLogo'
    },
    {
      position: new google.maps.LatLng(52.507210, 13.390210),
      type: 'shelterLogo'
    }
  ];

  // Create markers.
  for (let i = 0; i < establishments.length; i++) {
    const marker = new google.maps.Marker({
      position: establishments[i].position,
              icon: shelterLogo,
              map: newMap
            });
          };



  var styles = {
          default: null,
          hide: [
            {
              featureType: 'poi.business',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'transit',
              elementType: 'labels.icon',
              stylers: [{visibility: 'off'}]
            }
          ]
  };
}




export { currentPosition };
