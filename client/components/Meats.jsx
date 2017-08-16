import React from 'react'
import {connect} from 'react-redux'
import {GetMeat} from '../actions/meat'

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
            <li key={i}>{meat.name}</li>)}
        </ul>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {meat: state.meats}
}

export default connect(mapStateToProps)(Meat)
