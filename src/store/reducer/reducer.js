
import { ACTIVE_BUTTON, FLIPPED_CARDS, MATCHED, CLEAR_FLIPPED_CARDS, SECONDS, MINUTES, RESET_SECONDS } from "../types"

const initialState = {
  buttonActive: false,
  flippedCards: [],
  matched: [],
  seconds: 0,
  minutes: 0,
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_BUTTON:
      return { ...state, buttonActive: action.payload }
    case FLIPPED_CARDS:
      return { ...state, flippedCards: [...state.flippedCards, action.payload] }
    case CLEAR_FLIPPED_CARDS:
      return { ...state, flippedCards: [] }
    default:
      return state;
    case MATCHED:
      return { ...state, matched: [...state.matched, action.payload] }
    case SECONDS:
      return { ...state, seconds: state.seconds + 1 }
    case RESET_SECONDS:
      return { ...state, seconds: 0 }
    case MINUTES:
      return { ...state, minutes: state.minutes + 1 }
  }
};