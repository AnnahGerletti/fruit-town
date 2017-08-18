export default function randomDrink(state={}, action){
  switch(action.type){
    case 'RECEIVE_DRINK':
      return action.drink
    default:
      return state
  }
}
