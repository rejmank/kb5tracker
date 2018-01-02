import { createStore } from 'redux'
import { combinedReducers } from './reducer/index'

export const store = createStore(combinedReducers)
