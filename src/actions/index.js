import { ADD_PLACE, REMOVE_PLACE } from '../constants';
import buildPlacesUrl from '../api';
import { updateStorage } from '../utils/storage';

export function getPlace(lat, lon, placeName) {
  return dispatch => {
    return fetch(buildPlacesUrl(lat, lon))
      .then(response => response.json())
      .then((place) => {
        dispatch({
          type: ADD_PLACE,
          payload: {
            place: {
              placeName,
              place,
            }
          },
        });
      })
      .catch(error => console.warn(error));
  };
}

export function updatePlaces(lat, lon, placeName) {
  return (dispatch, getState) => {
    return dispatch(getPlace(lat, lon, placeName))
      .then(() => updateStorage('places', getState().places));
  }
}

export function removePlaceById(id) {
  return dispatch => {
    const p = Promise.resolve();
    return p.then(() => dispatch({
        type: REMOVE_PLACE,
        payload: { id },
      }))
      .catch(error => console.warn(error));
  }
}

export function removePlace(id) {
  return (dispatch, getState) => {
    return dispatch(removePlaceById(id))
      .then(() => updateStorage('places', getState().places));
  }
}
