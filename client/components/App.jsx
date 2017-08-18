import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Greetings from './Greetings'
import Fruit from './Fruits'
import Veggie from './Veggies'
import Meat from './Meats'
import Liquor from './Liquor'

const App = () => (
  <Router>
    <div className='app-container'>
      <h1 className='title'>Grocery Store</h1>
      <ul className='links'>
        <li><Link to='/'>Greetings</Link></li>
        <li><Link to='/fruit'>Fruit</Link></li>
        <li><Link to='/veggie'>Vegetables</Link></li>
        <li><Link to='/meat'>Meat</Link></li>
        <li><Link to='/liquor'>Liquor</Link></li>
      </ul>
      <div className='components'>
        <Route exact path="/" component={Greetings} />
        <Route exact path="/fruit" component={Fruit} />
        <Route exact path="/veggie" component={Veggie} />
        <Route exact path="/meat" component={Meat} />
        <Route exact path="/liquor" component={Liquor} />

      </div>
    </div>
  </Router>
)

export default App
