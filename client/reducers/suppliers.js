export default function supplyPerson(state =[], action){
  switch(action.type){
    case 'RECEIVE_SUPPLIER':
      return [...action.suppliers]
    default:
      return state
  }
}
