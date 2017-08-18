import request from 'superagent'

export function getSearchDrink(search='Gin'){
  return(dispatch) => {
    request
    .get('http://www.thecocktaildb.com/api/json/v1/1/filter.php')
    .query({i: search})
    .end((err, res)=>{
      if (err){
        console.log('error', err)
      }
      else{
        dispatch(receiveDrinks(res.body.drinks.slice(0,10)))
      }
    })
  }
}

function receiveDrinks(drinks){
  return{
    type: 'RECEIVE_DRINKS',
    drinks
  }
}

//when adding the form need to dispatch the action with a different search term, on click submit form submit the search term
