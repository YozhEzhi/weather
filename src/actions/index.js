import { ADD_PLACE, REMOVE_PLACE } from '../constants';
import { API_URL, API_KEY } from '../api';
import { updateStorage } from '../utils/storage';

export function getPlace(lat, lon) {
  return dispatch => {
    return fetch(`${API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
      .then(response => response.json())
      .then((place) => {
        dispatch({
          type: ADD_PLACE,
          payload: { place },
        });
      })
      .catch(error => console.warn(error));
  };
}

export function updatePlaces(lat, lon) {
  return (dispatch, getState) => {
    return dispatch(getPlace(lat, lon))
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
