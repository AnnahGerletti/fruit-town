export default function(state=[], action){
  switch(action.type) {
    case 'RECIEVE_FRUIT':
      return [...action.fruit]
    default:
      return state
  }
}
