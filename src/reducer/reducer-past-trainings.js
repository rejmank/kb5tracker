
const initialState = []


const pastTraining = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PAST_TRAINING':
      state = [...state, action.payload]
      return state
    case 'SET_PAST_TRAININGS':
      state = action.payload
      return state
    default:
      return state
  }
}

export default pastTraining
