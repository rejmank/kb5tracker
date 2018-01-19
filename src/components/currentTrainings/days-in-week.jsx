import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'


const WeekContainer = styled.div`
display: flex;
    .active {
        color: red;
    }
`


const DaysInWeek = ({ days }) => (
  <WeekContainer>
    <div className={ getClassName('po', days)}>Po</div>
    <div className={ getClassName('ut', days)}>Út</div>
    <div className={ getClassName('st', days)}>St</div>
    <div className={ getClassName('ct', days)}>Čt</div>
    <div className={ getClassName('pa', days)}>Pá</div>
    <div className={ getClassName('so', days)}>So</div>
    <div className={ getClassName('ne', days)}>Ne</div>
  </WeekContainer>
)

DaysInWeek.propTypes = {
  days: propTypes.arrayOf(propTypes.string).isRequired,
}

function getClassName(day, activeDays) {
  if (activeDays.includes(day)) {
    return 'active'
  }
  return 'inactive'
}

export default DaysInWeek
