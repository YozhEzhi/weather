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
      const removeById = item => item.place.id !== action.payload.id;
      const filteredPlaces = state.filter(removeById);
      return [...filteredPlaces];

    default:
      return state;
  }
}
