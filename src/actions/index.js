import * as types from '../constants/ActionTypes';
// TODO roztříštit 

export const addPastTraining = (training) => ({
    type: types.addPastTrainings,
    payload: training
});

export const addCurrentTraining = (training) => ({
    type: types.addCurrentTraining,
    payload: training
});

export const deleteCurrentTraining = (id) => ({
    type: types.deleteCurrentTraining,
    payload: id
});

export const editCurrentTraining = (training) => ({
    type: types.editCurrentTraining,
    payload: training
});

export const changeTrainingsInRow = (numberOfTrainings) => ({
    type: types.changeTrainingsInRow,
    payload: numberOfTrainings
});