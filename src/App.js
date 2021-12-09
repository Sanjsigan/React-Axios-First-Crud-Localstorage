import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Create from './components/create'
import Update from './components/update'
import Read from './components/read'

function App() {
  return (
    <Router>
    <div className="main">
      <h2 className="main-header">React CRUD Opperation</h2>
      <div>
        <Route exact path='/create' component={Create}/>
      </div>
      <div style={{marginTop:20}}>
        <Route exact path='/read' component={Read}/>
      </div>
      <Route exact path='/update' component={Update}/>
    </div>
    </Router>
  );
}

export default App;
