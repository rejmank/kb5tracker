import React from 'react'
import Excercises from '../excercise'
import styled from 'styled-components'

const Date = styled.h3`
    padding-left: 5px;
    margin-bottom: 3px;
`

const TrainingCard = styled.div`
    padding-left: 15px;
    -webkit-box-shadow: 6px 13px 60px -10px rgba(0,0,0,0.75);
    -moz-box-shadow: 6px 13px 60px -10px rgba(0,0,0,0.75);
    box-shadow: 6px 13px 60px -10px rgba(0,0,0,0.75);
    padding-bottom: 15px;
    padding-top: 15px;
`

const pastTraining = training => (
  <TrainingCard>
    <Date>{training.training.date}</Date>

    {training.training.excercises.map((excercise, index) => (
      <Excercises key={index} excerciseData={excercise}>
        <div className="feeling">
          {excercise.feeling}
        </div>
      </Excercises>))}
  </TrainingCard>
)

export default pastTraining
