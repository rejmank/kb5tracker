import React from 'react'
import propTypes from 'prop-types'

const Excercise = props => (
  <div>
    <div>{props.excerciseData.excercise}</div>
    <div className="item">{props.excerciseData.repetition}</div>
    <div >{props.excerciseData.unit}</div>
    <div className="item">{props.excerciseData.series}</div>
  </div>
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
