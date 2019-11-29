import GMaps from 'gmaps/gmaps.js';
import { autocomplete } from '../components/autocomplete';

document.addEventListener('DOMContentLoaded', function(){
  if(google) {
    autocomplete();
  } else {
   window.location.refresh();
  }
});

