import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PastTraining from './training'
import axios from 'axios'
import { setPastTrainings, addPastTraining } from '../../actions/index'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
    .training{
      grid-column-start: 2;
      grid-column-end: 6;
    }
  `

class PastTrainingsContainer extends React.Component {
  componentDidMount() {
    axios.get('http://private-fb7a77-kbtracker.apiary-mock.com/past-trainings/1')
      .then(response => response.data).then(data => {
        this.props.actions.setPastTrainings(data)
      })
      .catch(error => {
        console.log(error)
      })
    this.render()
  }

  render() {
    return (
      <Container>
        {this.props.trainings.map(training =>
          <PastTraining className="training" key={training.id} training={training}/>)}
      </Container>)
  }
}


PastTrainingsContainer.propTypes = { actions: PropTypes.object.isRequired,
  trainings: PropTypes.array.isRequired }

const mapStateToProps = state => ({ trainings: state.pastTrainings })

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({ setPastTrainings,
  addPastTraining }, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(PastTrainingsContainer)

