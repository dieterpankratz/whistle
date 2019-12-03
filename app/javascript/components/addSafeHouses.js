const shelterLogo = 'https://res.cloudinary.com/pankratz117/image/upload/v1575277537/establishement_bdwjlo.png';

const establishments = [
    {
      position: new google.maps.LatLng(, 13.397624),
      type: 'shelterLogo'
    },
    {
      position: new google.maps.LatLng(52.535374, 13.399362),
      type: 'shelterLogo'
    },
    {
      position: new google.maps.LatLng(52.534230, 13.397957),
      type: 'shelterLogo'
    },
    {
      position: new google.maps.LatLng(52.533127, 13.399960),
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
          };\
