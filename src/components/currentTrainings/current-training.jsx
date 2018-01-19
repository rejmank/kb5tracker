import React from 'react'
import Excercise from '../excercise'
import DaysInWeek from './days-in-week'
import propTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`

  -webkit-box-shadow: 6px 13px 60px -10px rgba(0,0,0,0.75);
  -moz-box-shadow: 6px 13px 60px -10px rgba(0,0,0,0.75);
  box-shadow: 6px 13px 60px -10px rgba(0,0,0,0.75);
  padding-left: 25px
`

const Button = styled.button`
  background-color: #edeeef;
  border-style: solid;
  border-color: black;
  border-width: 1px;
  margin-bottom: 15px;
  margin-left: 10px;

`

const CurrentTraining = ({ training, deleteTraining }) => (
  <Container>
    <h3>Trénink:</h3>
    {training.excercises.map((excercise, index) =>
      <Excercise key={index} excerciseData={excercise}/>)}
    <DaysInWeek days = {training.days} />
    <Button onClick={() => deleteTraining(training.id)}>delete training</Button>
    <Button>add new training</Button>
  </Container>)

CurrentTraining.propTypes = {
  deleteTraining: propTypes.func.isRequired,
  training: propTypes.object.isRequired,
}

export default CurrentTraining
