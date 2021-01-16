import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Upload from './pages/Upload.js';
import Header from './pages/Header.js';
import Dashboard from './pages/DashBoard.js';
import MenuBar from './pages/menu.js';
function App() {
  return (
    <Router>
      <Header />
      <div id='container'>
        <MenuBar />
        <Route path = '/upload' component = {Upload} />
        <Dashboard />
        <div id="footer">
          (c) 2014-2020 translation by <Link to="#">link</Link>
        </div>
      </div>
    </Router>
  );
}

export default App;