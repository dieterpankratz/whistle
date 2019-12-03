import { currentPosition } from '../components/currentPosition';
import { currentLocationToForm } from '../components/currentLocationToForm';


const mapDiv = document.querySelector("#newMap");
console.log(mapDiv)
// currentLocationToForm()
if (mapDiv) {
  currentPosition(mapDiv);
}

