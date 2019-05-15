import { SET_CORRECT } from '../actions/SET_CORRECT'
import { SET_INCORRECT } from '../actions/SET_INCORRECT'

const initialState = {
  correct: 0,
  incorrect: 0
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_CORRECT:
      return {
        ...state,
        correct: state.correct + 1
      }
    case SET_INCORRECT:
      return {
        ...state,
        incorrect: state.incorrect + 1
      }
    default:
      return state
  }
}