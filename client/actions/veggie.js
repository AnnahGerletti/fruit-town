import request from 'superagent'

export function getVeggie(){
  return(dispatch) => {
    request
    .get('/api/veggies')
    .end((err, res) =>{
      if(err){
        console.log('error!!', err);
      }
      else{
        dispatch(receiveVeggie(res.body))
      }
    })
  }
}

function recieveVeggie(veggie){
  return{
    type: 'RECEIVE_VEGGIE',
    meat
  }
}
