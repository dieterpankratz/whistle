import places from 'places.js';

const initAutocomplete = () => {
  const addressInput = document.getElementById('end_point');
  if (addressInput) {
    places({ container: addressInput });
  }
};

export { initAutocomplete };
