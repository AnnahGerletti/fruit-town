import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Greetings from './Greetings'
import Fruits from './Fruits'

const App = () => (
  <Router>
    <div className='app-container'>
      <h1>Hello World</h1>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/fruit'>Fruit</Link></li>

      </ul>
      <Route exact path="/" component={Greetings} />
      <Route exact path="/fruit" component={Fruits} />
    </div>
  </Router>
)

export default App
