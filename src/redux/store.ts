import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { gameReducer } from "./Game/GameReducer"

// reducers //
const reducer = combineReducers({
  game: gameReducer,
})

const middleware = [thunk]

const store = createStore(reducer, applyMiddleware(...middleware))

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store
