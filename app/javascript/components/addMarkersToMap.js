const currPushPin = 'https://res.cloudinary.com/pankratz117/image/upload/v1575142232/current_position_marker_e4jnlm.png';

export const addMarkersToMap = (coordinates, map, icon = currPushPin) => {
   var latlngbounds = new google.maps.LatLngBounds();

    coordinates.forEach(coordinate => {
      const marker =  new google.maps.Marker({
        position: new google.maps.LatLng(coordinate.lat, coordinate.long),
        map: map,
        icon: icon
      });
      latlngbounds.extend(marker.position)
    })

    map.fitBounds(latlngbounds)
}

export const addAMarker = (coordinate, map, icon) => {
   var latlngbounds = new google.maps.LatLngBounds();

      const marker =  new google.maps.Marker({
        position: new google.maps.LatLng(coordinate.lat, coordinate.long),
        map: map,
        icon: icon
      });
      latlngbounds.extend(marker.position)

    map.fitBounds(latlngbounds)
}

