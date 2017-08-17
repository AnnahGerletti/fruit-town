export default function fruit(state=[], action) {

  switch(action.type) {
    case 'RECEIVE_FRUITS':
      return [...action.fruits]
    case 'ADD_FRUIT':
      const {name, color} = action
      return [...state, {name, color}]
    default:
      return state
  }
}
//a longer way to return the new state.
// case 'ADD_FRUIT':
//   return [...state, {name: action.name, color: action.color}]
