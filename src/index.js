import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Login from './views/login'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Login} path="home.js" />
        <Route component={Home} exact path="" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
