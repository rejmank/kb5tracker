const trainingChain = (state = 2, action) => {
  switch (action.type) {
    case 'CHANGE_TRAININGS_IN_ROW':
      state = action.payload
      return state
    default:
      return state
  }
}

export default trainingChain
