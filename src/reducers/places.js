import {
  ADD_PLACE,
  REMOVE_PLACE,
} from '../constants';

export default function reducer(state = [], action) {
  switch(action.type) {
    case ADD_PLACE:
      return [
        ...state,
        action.payload.place,
      ];

    case REMOVE_PLACE:
      const filteredPlaces = state.filter(item => item.id !== action.payload.id);
      return [...filteredPlaces];

    default:
      return state;
  }
}
