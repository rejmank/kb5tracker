import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'

const ExcerciseRow = styled.div`
  display: flex;
  padding-left: 25px;
  div {
    padding-left: 10px;
    padding-top: 5px;
  }
`

const Excercise = props => (
  <ExcerciseRow>
    <div>{props.excerciseData.excercise}</div>
    <div>{props.excerciseData.repetition}</div>
    <div>{props.excerciseData.unit}</div>
    <div>{props.excerciseData.series}</div>
  </ExcerciseRow>
)

Excercise.propTypes = {
  excerciseData: propTypes.objectOf(
    propTypes.string.isRequired,
    propTypes.number.isRequired,
    propTypes.string.isRequired,
    propTypes.number.isRequired,
  ).isRequired,
}

export default Excercise
