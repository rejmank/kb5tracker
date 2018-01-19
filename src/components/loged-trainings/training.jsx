import React from 'react'
import styled from 'styled-components'
import { icons } from '../../constants/icons'

const Card = styled.div`
    display: grid;
    padding-bottom: 5px;
    margin-bottom: 5px;
    -webkit-box-shadow: -5px 5px 5px 0px rgba(194,192,194,1);
    -moz-box-shadow: -5px 5px 5px 0px rgba(194,192,194,1);
    box-shadow: -5px 5px 5px 0px rgba(194,192,194,1);
    display: flex;
    max-width: 30%;
    margin-left: 20px;
`
const Date = styled.div`
    padding-left:15px;
    padding-top:15px;
`
const Excercises = styled.div`
    padding-left: 15px;
    padding-top: 40px;
`
const Training = styled.div`
display: flex;
.item {
    padding-left: 15px;
}
.feeling {
    margin-left: 30px;
}
`

const pastTraining = training => (
  <Card>
    <Date>{training.training.date}</Date>
    <Excercises>
      {training.training.excercises.map(excercise => (
        <Training>
          <img width="50" height="50" src={icons[excercise.excercise]}></img>
          <div className="item">{excercise.repetition}</div>
          <div >{excercise.unit}</div>
          <div className="item">{excercise.series}</div>
          <div className="feeling">
            <div>{excercise.feeling}</div>
          </div>
        </Training>))}
    </Excercises>
  </Card>
)

export default pastTraining
