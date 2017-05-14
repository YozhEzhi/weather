import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

import createFakeLocalStorage from '../utils/localStorageMock';
import { removePlace, updatePlaces } from './index';
import { ADD_PLACE, REMOVE_PLACE, UPDATE_PLACE } from '../constants';
import { DEFAULT_PLACE } from '../api';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Actions', () => {
  beforeAll(() => createFakeLocalStorage());

  xit('creates ADD_PLACE when adding place', () => {
    const { lat, lon, placeName } = DEFAULT_PLACE;
    const expected = [
      {
        type: ADD_PLACE,
        id: place.id,
        place: {
          placeName,
          place,
        },
      },
    ];
    const store = mockStore({ places: {} });

    return store.dispatch(updatePlaces(lat, lon, placeName))
      .then(() => expect(store.getActions()).toEqual(expected));
  });

  fit('creates REMOVE_PLACE when removing place', () => {
    const id = 524901;
    const expected = [
      {
        type: REMOVE_PLACE,
        id,
      },
    ];
    const initialState = {
      places: {
        [id]: {},
      },
    };
    const store = mockStore(initialState);

    return store.dispatch(removePlace(id))
      .then(() => expect(store.getActions()).toEqual(expected));
  });
});
