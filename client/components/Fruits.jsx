import React from 'react'
import AddFruitForm from './AddFruitForm'

export default class Fruit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false
    }
  }
  componentDidMount() {
    this.props.onLoad()
  }

  openForm(e){
    this.setState({showForm: true})
  }
  render() {
    return (
      <div className='fruit'>
        <h2>Fruit!!</h2>
        {this.state.showForm && <AddFruitForm />}
        <button id='button' onClick={(e) =>
          this.openForm(e)}>Add Item</button>
        <ul>
          {this.props.fruit.map((fruit, i) =>
            <h3 key={i}><li>{fruit.color}-{fruit.name} --  Supplied By: {fruit.supplier_name}</li></h3>)}
        </ul>
      </div>
    )
  }
}
