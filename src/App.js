import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import List from './pages/list/List';

export default function App() {
  return (
    <div className="App">
      hello react app
      <Router>
        <Link to="/list">list</Link>
        <Route path="/list" component={List}/>
      </Router>

    </div>
  )
}
