import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'


const WeekContainer = styled.div`
width: 80%;
display: flex;
padding-top: 10px;
padding-bottom: 10px;
    .active {
        background-color: #cecbca;
    }
`

const Day = styled.div`
    background-color: #fFFFF;
    text-align: center;
    width: 80%;
    heigth: 20%;
    border-color: black;
    border-width: 1px;
    border-style: solid;
`


const DaysInWeek = ({ days }) => (
  <WeekContainer>
    <Day className={ getClassName('po', days)}>Po</Day>
    <Day className={ getClassName('ut', days)}>Út</Day>
    <Day className={ getClassName('st', days)}>St</Day>
    <Day className={ getClassName('ct', days)}>Čt</Day>
    <Day className={ getClassName('pa', days)}>Pá</Day>
    <Day className={ getClassName('so', days)}>So</Day>
    <Day className={ getClassName('ne', days)}>Ne</Day>
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
