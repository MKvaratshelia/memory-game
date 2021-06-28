import { ACTIVE_BUTTON, FLIPPED_CARDS, CLEAR_FLIPPED_CARDS, MATCHED, SECONDS, MINUTES, RESET_SECONDS } from '../types'

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

export const setSeconds = () => {
  return {
    type: SECONDS
  }
}

export const timerActive = () => {
  return async (dispatch) => {
    try {
      let timer = setInterval(() => {
        dispatch(setSeconds())
      }, 1000)
    }
    catch (e) {
      console.log(e)
    }
  }
}

export const resetSeconds = () => {
  return {
    type: RESET_SECONDS
  }
}

export const setMinutes = () => {
  return { type: MINUTES }
}