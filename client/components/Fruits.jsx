import React from 'react'
import {connect} from 'react-redux'
import {getFruit} from '../actions/fruit'

class Fruit extends React.Component {
  componentDidMount() {
    this.props.dispatch(getFruit())
  }
  render() {
    return (
      <div className='fruit'>
        <h2>Fruit!!</h2>
        <ul>
          {this.props.fruit.map((fruit, i) => <li key={i}>{fruit.name}</li>)}
        </ul>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {fruit: state.fruit}
}

export default connect(mapStateToProps)(Fruit)
