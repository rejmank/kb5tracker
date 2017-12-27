import React from 'react';
import bindActionCreators from 'redux';
import {connect} from 'react-redux';

class PastTrainings extends React.Component {
    
    createListItems() {
       
       return this.props.trainings.map((training) => {
          
           return <li key="training.date">{training.date}</li>

       });
    }
    
    render() {
        return (<ul>
            {this.createListItems()}
        </ul>);
    }
}

function mapStateToProps(state) {
   
  return {
      trainings: state.pastTrainings
  };
}


export default connect(mapStateToProps)(PastTrainings);