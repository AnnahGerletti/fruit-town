import request from 'superagent'

export function getFruit() {
  return (dispatch) => {
    request
    .get('/api/fruits')
    .end((err, res) => {
      if (err) {
        console.log('ERRROR!!', err)
      }
      else {
        dispatch(receiveFruit(res.body))
      }
    })
  }
}

function receiveFruit(fruit) {
  return {
    type: 'RECEIVE_FRUIT',
    fruit
  }
}
