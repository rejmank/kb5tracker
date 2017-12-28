import currentTrainings from './reducer-current-trainings';
import pastTrainings from './reducer-past-trainings';
import trainingsChain from './reducer-trainings-chain';
import {combineReducers} from 'redux';


export const combinedReducers = combineReducers({
    currentTrainings: currentTrainings,
    trainingsChain: trainingsChain,
    pastTrainings: pastTrainings
});

