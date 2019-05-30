import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import ItemPage from './ItemPage'
import Home from './Home'

const routing = (
    <Router>
      <div>
        <Route path="/" component={Home} />
        <Route path="/item" component={ItemPage} />
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))
