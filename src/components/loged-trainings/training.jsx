import React from 'react'
import Excercises from '../excercise'

const pastTraining = training => (
  <div>
    <h1>{training.training.date}</h1>

    {training.training.excercises.map((excercise, index) => (
      <Excercises key={index} excerciseData={excercise}>
        <div className="feeling">
          {excercise.feeling}
        </div>
      </Excercises>))}
  </div>
)

export default pastTraining
