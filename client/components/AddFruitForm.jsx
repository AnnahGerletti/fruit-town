import React from 'react'
import {connect} from 'react-redux'

class AddFruitForm extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      name: '',
      color: '',
      supplier_id: 1
    }
  }

render(){
  console.log(this.props.suppliers);
  return(
    <div className="addFruitForm">
      <form>
        <p><input placeholder="Name of Fruit" name='name' onChange={e => this.fieldChanged(e)} value={this.state.name} /></p>
        <p><input placeholder="Color of Fruit" name='colour' onChange={e => this.fieldChanged(e)} value={this.state.color} /></p>
        <select name="supplier_id" onChange={e => this.fieldChanged(e)}>
          {this.props.suppliers.map(supplier => <option value={supplier.id}>{supplier.name}</option>)}
        </select>
        <button onClick={e => this. addFruit(e)}>Add Fruit</button>
        <a href='#' onClick={this.props.finishAdd}>Cancel</a>
      </form>
    </div>
  )
}

}
function mapStateToProps(state){
  return {suppliers:state.suppliers}
}
export default connect (mapStateToProps)(AddFruitForm)
