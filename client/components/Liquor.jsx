import React from 'react'
import {connect} from 'react-redux'
import {getRandomDrink} from '../actions/randomDrink'
import {getSearchDrink} from '../actions/searchDrink'


class Liquor extends React.Component {
  componentDidMount() {
    this.props.dispatch(getRandomDrink())
    this .props.dispatch(getSearchDrink('vodka'))
  }

  newDrink(e){

  }

  render() {
    const {drink} = this.props
    console.log(this.props);
    return (
      <div className='liquor'>
        <h2>-Liquor-</h2>
        <button id='button' onClick={(e) =>
          this.newDrink(e)}>New Cocktail</button>
        <ul>
          <li>Name: {drink.strDrink}</li>
          <li>Alcoholic or Not: {drink.strAlcoholic}</li>
        </ul>
        <img className='imageDrink' src={drink.strDrinkThumb} />

      </div>
    )
  }
}
function mapStateToProps(state) {
  return {drink: state.randomDrink}
}


export default connect(mapStateToProps)(Liquor)


// <ul>
//   {this.props.fruit.map((fruit, i) =>
//     <h3><li key={i}>{fruit.color}-{fruit.name} --  Supplied By: {fruit.supplier_name}</li></h3>)}
// </ul>
