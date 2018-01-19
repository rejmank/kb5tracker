import React from 'react'
import PastTrainingsContainer from './loged-trainings/pastTrainingsContainer'
import CurrentTrainingsContainer from './currentTrainings/current-trainings-container'
import styled from 'styled-components'

const MainContainer = styled.div`
display: flex
`


const Container = () => (
  <MainContainer>
    <PastTrainingsContainer className="firstHalf"/>
    <CurrentTrainingsContainer className="secondHalf"/>
  </MainContainer>
)

export default Container
