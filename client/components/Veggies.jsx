import React from 'react'
import {connect} from 'react-redux'
import {getVeggie} from '../actions/veggie'

class Veggie extends React.Component {
  componentDidMount(){
    this.props.dispatch(getVeggie())
  }
  render(){
    return (
      <div className='veggie'>
        <h2>Vegetables..</h2>
        <ul>
          {this.props.veggie.map((veggie, i) =>
              <h3><li key={i}>{veggie.name} - {veggie.rating} / 10 --  Supplied By: {veggie.supplier_name} </li></h3>
          )}
        </ul>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {veggie: state.veggies}
}
export default connect(mapStateToProps)(Veggie)
