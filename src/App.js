import './App.css';
import Home from './components/Home/Home'

import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { About } from './components/About/About';


export default function App() {
  return (
    <Router>
      <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-success navbar-full' style={{ "backgroundColor": "orange", "fontWeight": "bold" }}>
          <ul className='navbar-nav'>
            <Link to="/" className='nav-item nav-link m-1'>UseQuery</Link>
            <Link to="/apollo" className='nav-item nav-link m-1'>Apollo</Link>
            <Link to="/users" className='nav-item nav-link m-1'>Users</Link>
            <Link to="/about" className='nav-item nav-link m-1'>About</Link>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/apollo">
            <Apollo />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );

  function Apollo() {
    return <h2>Apollo</h2>;
  }

  function Users() {
    return <h2>Axiom</h2>;
  }
}