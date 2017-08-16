import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Greetings from './Greetings'
import Fruit from './Fruits'
import Veggie from './Veggies'

const App = () => (
  <Router>
    <div className='app-container'>
      <h1>Grocery Store</h1>
      <ul>
        <li><Link to='/'>Greetings</Link></li>
        <li><Link to='/fruit'>Fruit</Link></li>
        <li><Link to='/veggie'>Vegetables</Link></li>
        <li><Link to='/meat'>Meat</Link></li>
      </ul>
        <Route exact path="/" component={Greetings} />
        <Route exact path="/fruit" component={Fruit} />
        <Route exact path="/veggie" component={Veggie} />
    </div>
  </Router>
)

export default App
