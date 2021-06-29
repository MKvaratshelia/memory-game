import { ACTIVE_BUTTON, FLIPPED_CARDS, CLEAR_FLIPPED_CARDS, MATCHED, FLIPPED_OFF } from '../types'

export const setButtonActive = (state) => {
  return {
    type: ACTIVE_BUTTON,
    payload: state
  }
}

export const setFlippedCards = (id) => {
  return {
    type: FLIPPED_CARDS,
    payload: id
  }
}

export const clearFlippedCards = () => {
  return {
    type: CLEAR_FLIPPED_CARDS
  }
}

export const setMatched = (card) => {
  return {
    type: MATCHED,
    payload: card
  }
}

export const setFlippedOff = (state) => {
  return {
    type: FLIPPED_OFF,
    payload: state
  }
}
