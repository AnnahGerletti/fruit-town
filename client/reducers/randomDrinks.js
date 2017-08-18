export default function randomDrink(state={}, action){
  console.log('hi 2');
  switch(action.type){
    case 'RECEIVE_DRINK':
      return action.drink
    default:
      return state
  }
}
