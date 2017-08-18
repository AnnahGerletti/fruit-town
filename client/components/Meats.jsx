import React from 'react'
import {connect} from 'react-redux'
import {getMeat} from '../actions/meat'

class Meat extends React.Component {
  componentDidMount() {
    this.props.dispatch(getMeat())
  }
  render(){
    return(
      <div>
        <h2>*Meat*</h2>
        <ul>
          {this.props.meat.map((meat, i) =>
            <h3 key={i}><li>{meat.name} -- Supplied By:  {meat.supplier_name}</li></h3>)}
        </ul>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {meat: state.meats}
}

export default connect(mapStateToProps)(Meat)
