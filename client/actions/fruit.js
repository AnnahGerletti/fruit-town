import request from 'superagent'

export const getFruit(){
  return (dispatch) => {
    request
    .get('/api/fruits')
    .end(err, res) => {
      if (err) {
        console.log("ERROR!!", err)
      }
      else{
        dispatch(receiveFruit(res.body)
      }
    }
  }
}

function receiveFruit(fruit) {
  return {
    type: 'RECIEVE_FRUIT',
    fruit
  }
}
