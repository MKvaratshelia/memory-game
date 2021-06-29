
import { ACTIVE_BUTTON, FLIPPED_CARDS, MATCHED, CLEAR_FLIPPED_CARDS, FLIPPED_OFF } from "../types"

const initialState = {
  buttonActive: false,
  flippedCards: [],
  matched: [],
  seconds: 0,
  minutes: 0,
  flippedOff: true
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_BUTTON:
      return { ...state, buttonActive: action.payload }
    case FLIPPED_CARDS:
      return { ...state, flippedCards: [...state.flippedCards, action.payload] }
    case CLEAR_FLIPPED_CARDS:
      return { ...state, flippedCards: [] }
    case MATCHED:
      return { ...state, matched: [...state.matched, action.payload] }
    case FLIPPED_OFF:
      return { ...state, flippedOff: action.payload }
    default:
      return state;
  }
};