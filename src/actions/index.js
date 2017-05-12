import { pickBy, isEqual } from 'lodash';

import { ADD_PLACE, REMOVE_PLACE, UPDATE_PLACE } from '../constants';
import buildPlacesUrl from '../api';
import { updateStorage } from '../utils/storage';

export function getPlace(lat, lon, placeName) {
  return (dispatch) => {
    return fetch(buildPlacesUrl(lat, lon))
      .then(response => response.json())
      .then((place) => {
        dispatch({
          type: ADD_PLACE,
          id: place.id,
          place: {
            placeName,
            place,
          },
        });
      })
      .catch(error => console.warn(error));
  };
}

export function updatePlaces(lat, lon, placeName) {
  return (dispatch, getState) => {
    return dispatch(getPlace(lat, lon, placeName))
      .then(() => updateStorage('places', getState()));
  };
}

export function removePlaceById(id) {
  return (dispatch) => {
    return Promise.resolve().then(() => dispatch({
      type: REMOVE_PLACE,
      id,
    }))
    .catch(error => console.warn(error));
  };
}

export function removePlace(id) {
  return (dispatch, getState) => {
    return dispatch(removePlaceById(id))
      .then(() => updateStorage('places', getState()));
  };
}

export function updatePlaceById(id, places) {
  const placeObj = pickBy(places, (value, key) => isEqual(parseInt(key, 10), id))[id];
  const { lat, lon } = placeObj.place.coord;
  const { placeName } = placeObj;

  return (dispatch) => {
    return fetch(buildPlacesUrl(lat, lon))
      .then(response => response.json())
      .then((place) => {
        dispatch({
          type: UPDATE_PLACE,
          id,
          place: { placeName, place },
        });
      })
      .catch(error => console.warn(error));
  };
}

export function updatePlace(id) {
  return (dispatch, getState) => {
    const state = getState();

    return dispatch(updatePlaceById(id, state))
      .then(() => updateStorage('places', state));
  };
}
