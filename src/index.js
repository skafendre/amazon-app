import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import ItemPage from './ItemPage'
import Home from './Home'
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/item/:id" component={ItemPage} />
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))
