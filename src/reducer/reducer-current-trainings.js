const trainings = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CURRENT_TRAINING':
      state = [...state, action.payload]
      return state
    case 'DELETE_CURRENT_TRAINING':
      state = state.filter(training => training.id !== action.payload)
      return state
    case 'EDIT_CURRENT_TRAINING':
      return state.map(training => {
        if (training.id === action.payload.id) {
          training = action.payload
        }
        return training
      })
    case 'SET_CURRENT_TRAININGS':
      state = action.payload
      return state
    default:
      return state
  }
}

export default trainings
