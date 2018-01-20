import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import CurrentTraining from './current-training'
import { setCurrentTrainings, deleteCurrentTraining } from '../../actions/index'


class CurrentTrainingsContainer extends React.Component {
  componentDidMount() {
    axios.get('http://private-fb7a77-kbtracker.apiary-mock.com/current-trainings/' + '1')
      .then(response => response.data).then(data => {
        this.props.actions.setCurrentTrainings(data)
      })
      .catch(error => {
        console.log(error)
      })
    this.render()
  }

  render() {
    return (
      <div>
        <button>add new training</button>
        {this.props.currentTrainings.map(training => (<CurrentTraining training={training}
          key={training.id} deleteTraining={this.props.actions.deleteCurrentTraining}/>))}
      </div>)
  }

  deleteTraining(id) {
    this.props.actions.deleteCurrentTraining(id)
  }
}


CurrentTrainingsContainer.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  currentTrainings: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({ currentTrainings: state.currentTrainings })

const mapDispatchToProps = dispatch =>
  ({ actions: bindActionCreators({ setCurrentTrainings, deleteCurrentTraining }, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(CurrentTrainingsContainer)

