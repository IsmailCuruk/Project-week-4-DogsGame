import {SET_BREEDS} from '../actions/SET_BREEDS'

const initialState = {
  dogBreeds: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_BREEDS:
      return {
        ...state,
        dogBreeds: action.payload
      };
    default:
      return state
  }
}

