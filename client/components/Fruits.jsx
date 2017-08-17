import React from 'react'
import {connect} from 'react-redux'
import {getFruit} from '../actions/fruit'

class Fruit extends React.Component {
  componentDidMount() {
    this.props.dispatch(getFruit())
  }

  openForm(e){

  }
  render() {
    return (
      <div className='fruit'>
        <h2>Fruit!!</h2>
        <button id='button' onClick={(e) =>
          this.openForm(e)}>Add Item</button>
        <ul>
          {this.props.fruit.map((fruit, i) =>
            <h3><li key={i}>{fruit.color}-{fruit.name} --  Supplied By: {fruit.supplier_name}</li></h3>)}
        </ul>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {fruit: state.fruits}
}

export default connect(mapStateToProps)(Fruit)

// <p><a id='button' href='#' onClick={(e) =>
//   this.showMessage(e)}>button</a></p>
// {this.state.message}
