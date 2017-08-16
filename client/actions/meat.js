import request from 'superagent'

export function getMeat(){
  return(dispatch) => {
    request
    .get('/api/meats')
    .end((err, res) =>{
      if (err) {
        console.log('error', err)
      }
      else {
        dispatch(receiveMeat(res.body))
      }
    })
  }
}

function receiveMeat(meats){
  return{
    type: 'RECEIVE_MEATS',
    meats
  }
}
