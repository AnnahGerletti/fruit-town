export default function veggie(state=[], action){
  switch(action.type){
    case 'RECEIVE_VEGGIES':
      return[...action.veggies]
      default:
      return state
  }
}
//the action is what ever is dispatched from superagent
