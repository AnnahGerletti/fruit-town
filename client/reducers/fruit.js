export default function(state=[], action) {
  switch(action.type) {
    case 'RECEIVE_FRUIT':
      return [...action.fruit]
    default:
      return state
  }
}
