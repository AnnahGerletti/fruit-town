import React from 'react'
import {connect} from 'react-redux'

class AddFruitForm extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      name: '',
      color: ''
    }
  }
render(){
  return(
    <div className="addFruitForm">
      <form>
        <p><input placeholder="Name of Fruit" name='name' onChange={e => this.fieldChanged(e)} value={this.state.name} /></p>
        <p><input placeholder="Color of Fruit" name='name' onChange={e => this.fieldChanged(e)} value={this.state.color} /></p>
        <button conClick={e => this. addFruit(e)}>Add Fruit</button>
        <a href='#' onClick={this.props.finishAdd}>Cancel</a>
      </form>
    </div>
  )
}

}
function mapStateToProps(state){

}
export default connect (mapStateToProps)(AddFruitForm)
