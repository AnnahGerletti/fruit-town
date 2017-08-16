export default function meat(state = [], action){
  console.log('hello');
    switch (action.type) {
      case 'RECEIVE_MEATS':
        return [...action.meats]
      default:
        return state
    }
  }
