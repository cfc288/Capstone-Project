import React, { Component, useState } from 'react'
import './App.css';

import { Routes ,Route } from 'react-router-dom';

import NavBar from './Routes/NavBar/NavBar.js'
import Main from './Routes/Main/main.js';
import About from './Routes/About/about.js';
import Login from './Routes/Login/login';

import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";





export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeUser, setActiveUser] = useState({})

  const logIn = (user) => {
    setActiveUser(user)
    setIsLoggedIn(true)
  }



  return (
    <div>

      <div>
        <h1> Kelper </h1>
        {
        isLoggedIn ? <Main user={activeUser}/> : <Login logIn={logIn}/> 
        }

      </div>  

    </div>
  ) 
}


