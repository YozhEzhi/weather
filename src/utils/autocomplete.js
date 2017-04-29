const google = window.google;

export default function initAutocomplete(elementId, updatePlaces, dropState) {
  const options = {
    types: ['(cities)'],
  };
  const searchField = document.getElementById(elementId);
  const places = new google.maps.places.Autocomplete(searchField, options);

  google.maps.event.addListener(places, 'place_changed', () => {
    const placeName = places.gm_accessors_.place.Fc.formattedPrediction;
    const place = places.getPlace();
    const lat = place.geometry.location.lat();
    const lon = place.geometry.location.lng();

    updatePlaces(lat, lon, placeName);
    dropState();
  });
}
