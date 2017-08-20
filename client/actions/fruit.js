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

function receiveFruit(fruits) {
  return {
    type: 'RECEIVE_FRUITS',
    fruits
  }
}

export function appendFruitRequest (fruit, callback){
  return (dispatch) => {
    request
      .post('/api/fruits')
      .send(fruit)
      .end((err, res) =>{
        if (err){
          callback(err)
        }
        else {
          callback()
      }
    })
  }
}

function addFruit(fruit) {
  return{
    type: 'ADD_FRUIT',
    fruit
  }
}
