import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { ThemeReducer } from './theme/reducer'

const Reducers = combineReducers({ ThemeReducer })

export const Store = createStore(Reducers)

export type RootState = ReturnType<typeof Store.getState>
