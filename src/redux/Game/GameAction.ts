import { SET_OPPONENT, UPDATE_SCORE } from "./GameTypes"

// @ts-ignore
export const setOpponent = (opponent) => (dispatch, getState) => {
  dispatch({
    type: SET_OPPONENT,
    payload: opponent,
  })
}

// @ts-ignore
export const updateScore = (score: number) => (dispatch, getState) => {
  dispatch({
    type: UPDATE_SCORE,
    payload: score,
  })
}
