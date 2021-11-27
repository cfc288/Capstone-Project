import React from 'react';
import './App.css';
import NavBar from './Routes/NavBar/NavBar.js'
import Home from './Routes/Home/home.js';
import About from './Routes/About/about.js';
import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
      

        <hr />

       
        <Routes>
          <Route path='/welcome' element={<Home/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </div>
    </Router>
  );
}
