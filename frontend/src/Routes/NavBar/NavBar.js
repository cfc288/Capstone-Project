import React, { Component, useState } from 'react'
import { Link } from "react-router-dom";
import './NavBar.css';

const baseUrl = 'http://localhost:8000/api/v1/'

function NavBar(props){
  console.log(props)
  console.log('user', props.user)
  console.log('isLoggedIn', props.isLoggedIn)

  






return(
    <ul>
          <li>
          <Link to="/">Home</Link>
          </li>
          ||
          <li>
            <Link to="/about">About</Link>
          </li>
          ||
          <li>
            <Link to="/inbox">Inbox</Link>
          </li>
          ||
          <li>
            <button onClick={()=> props.logout()}> Log Out </button>
          </li>
    </ul>
)
}

export default NavBar