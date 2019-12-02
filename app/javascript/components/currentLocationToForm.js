function currentLocationToForm(latElement, longElement, position) {
  const currentLat = position.coords.latitude;
  const currentLong = position.coords.longitude;

  latElement.value = currentLat;
  longElement.value = currentLong;
}

export { currentLocationToForm };
