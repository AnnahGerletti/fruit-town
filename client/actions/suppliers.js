import request from 'superagent'

export function getSuppliers(){
  return (dispatch) => {
    request
    .get('/api/suppliers')
    .end((err, res) =>{
      if(err) {
        console.log('Error', err);
      }
      else {
        dispatch(receiveSupplier(res.body))
      }
    })
  }
}

function receiveSupplier(suppliers){
  return{
    type: 'RECEIVE_SUPPLIER',
    suppliers
  }
}
