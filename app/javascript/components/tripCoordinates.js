const tripCoordinates = () => {
  const points = [];
  let destinationLat = document.querySelector("#end_lat");
  let destinationLong= document.querySelector("#end_long");
  let startLat = document.querySelector("#start_lat")
  let startLong = document.querySelector("#start_long")


  const startingCoords = {
    lat: parseFloat(startLat.innerHTML),
    long: parseFloat(startLong.innerHTML)
  }

  // add starting coords to points array
  points.push(startingCoords)

  const destinationCoords = {
    lat: parseFloat(destinationLat.innerHTML),
    long: parseFloat(destinationLong.innerHTML)

  }
  // add destination coords to coordinatesArray array

  points.push(destinationCoords)

  return points;
}

export { tripCoordinates }
