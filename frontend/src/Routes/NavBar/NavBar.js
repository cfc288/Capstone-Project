import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

function NavBar(){

return(
    <ul>
          <li>
            <Link to="/welcome">Home</Link>
          </li>
          |
          <li>

          </li>
          |
          <li>
            <Link to="/about">About</Link>
          </li>
    </ul>
)
}

export default NavBar