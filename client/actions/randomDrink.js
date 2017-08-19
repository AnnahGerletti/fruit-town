import request from 'superagent'

export function getRandomDrink(){
  return(dispatch) => {
    request
    .get('/api/external')
    .end((err, res)=>{
      if (err){
        console.log('error', err)
      }
      else{
        dispatch(receiveDrink(res.body.drinks[0]))
      }
    })
  }
}

function receiveDrink(drink){
  return{
    type: 'RECEIVE_DRINK',
    drink
  }
}
