const initialState = {
  score: 0,
  dogBreeds: [],
  images: []


};


function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_BREEDS":
      return {
        ...state,
        dogBreeds: action.payload
      };

    case "SET_IMAGES":
      return {

      }
    default:
      return state
  }
}
