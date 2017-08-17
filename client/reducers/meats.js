export default function meats(state = [], action){
    switch (action.type) {
      case 'RECEIVE_MEATS':
        return [...action.meats]
      case 'ADD_MEAT':
      const {name} = action
        return[...state, {name}]
      default:
        return state
    }
  }

//add ADD_MEAT code based on the failing test.
