import React from 'react'
import propTypes from 'prop-types'

const Excercise = ({ excerciseData }) => (

  <div>
    <div className="item">{excerciseData.repetition}</div>
    <div >{excerciseData.unit}</div>
    <div className="item">{excerciseData.series}</div>
  </div>
)

Excercise.propTypes = {
  excerciseData: propTypes.object.isRequired,
}

export default Excercise
