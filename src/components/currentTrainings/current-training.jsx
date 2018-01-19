import React from 'react'
import Excercise from '../excercise'
import DaysInWeek from './days-in-week'
import propTypes from 'prop-types'


const CurrentTraining = ({ training, deleteTraining }) => (
  <div>
    <DaysInWeek days = {training.days} />
    {training.excercises.map((excercise, index) =>
      <Excercise key={index} excerciseData={excercise}/>)}
    <button onClick={() => deleteTraining(training.id)}>delete training</button>
    <button>addNewTraining</button>
  </div>)

CurrentTraining.propTypes = {
  deleteTraining: propTypes.func.isRequired,
  training: propTypes.object.isRequired,
}

export default CurrentTraining
