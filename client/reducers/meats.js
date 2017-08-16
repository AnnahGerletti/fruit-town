export default function meats(state = [], action){
    switch (action.type) {
      case 'RECEIVE_MEATS':
        return [...action.meats]
      default:
        return state
    }
  }
