
export default (state = 2, action) => {
  switch(action.type) {
    case 'CHANGE_TRAININGS_IN_ROW':
      return state = action.payload
    default:
      return state;
  }

}