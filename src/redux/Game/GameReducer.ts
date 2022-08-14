import { SET_OPPONENT, UPDATE_SCORE } from "./GameTypes"

interface Action {
  type: String
  payload: any
}

const initialState = {
  opponent: null,
  score: 0,
}

export const gameReducer = (state = initialState, action: Action) => {
  const { type, payload } = action
  switch (type) {
    case SET_OPPONENT:
      return {
        ...state,
        opponent: payload,
      }
    case UPDATE_SCORE:
      return {
        ...state,
        score: state.score + payload,
      }
    default:
      return state
  }
}
