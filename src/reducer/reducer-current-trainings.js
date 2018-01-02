
const initialState = [{
  excercises: [
    {
      excercise: '1',
      repetition: 6,
      series: 5,
      days: [1, 3, 5],
    },
    { excercise: '7',
      repetition: 6,
      series: 5 },
  ],
  days: [1, 3, 5],
  id: 1,
}]


const trainings = (state = initialState, action) => {
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
    default:
      return state
  }
}

export default trainings
