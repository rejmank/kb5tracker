import currentTrainings from './reducer-current-trainings'
import pastTrainings from './reducer-past-trainings'
import trainingsChain from './reducer-trainings-chain'
import { combineReducers } from 'redux'


export const combinedReducers = combineReducers({
  currentTrainings,
  trainingsChain,
  pastTrainings,
})

