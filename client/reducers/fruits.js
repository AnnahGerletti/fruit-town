export default function fruit(state=[], action) {
  switch(action.type) {
    case 'RECEIVE_FRUITS':
      return [...action.fruits]
    default:
      return state
  }
}
