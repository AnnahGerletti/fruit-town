import React from 'react'
import {connect} from 'react-redux'

import {getFruit} from '../actions/fruit'
// import {getSearchDrink} from '../actions/searchDrink'

import Fruit from '../components/Fruits.jsx'

function mapStateToProps(state) {
  return {fruit: state.fruits}
}

function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => {
      dispatch(getFruit())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fruit)

// <p><a id='button' href='#' onClick={(e) =>
//   this.showMessage(e)}>button</a></p>
// {this.state.message}
// dispatch(getSearchDrink('vodka'))
