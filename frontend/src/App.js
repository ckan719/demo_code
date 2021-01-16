import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Upload from './pages/Upload.js';
import Lessions from './pages/Lessions.js';
function App() {
  return (
    <Router>
      <div id='container'>
        <Route path='/upload'>
          <Upload />
        </Route>
        <Route path='/lessions/:path'>
          <Lessions />
        </Route>
        <Route path='/' exact>
          <Home />
        </Route>
      </div>
    </Router>
  );
}

export default App;