import React from 'react';
import './App.css';
import Home from './Routes/Home/home.js';
import About from './Routes/About/about.js';
import {Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
    </div>
  );
}

export default App;
