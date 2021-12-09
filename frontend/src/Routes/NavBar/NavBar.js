import React, { Component, useState } from 'react'
import { Link } from "react-router-dom";
import './NavBar.css';

function NavBar(){

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
         
    </ul>
)
}

export default NavBar