import React, { Component, useState } from 'react'
import { Link } from "react-router-dom";
import './NavBar.css';
import Check from '../Check/check';

const baseUrl = 'http://localhost:8000/api/v1/'

function NavBar(props){
  //showMain={showMain}
  //user={activeUser} 
  //logout={logout}
  //--------------------
  //showMain={showMain}
  //openMain={openMain}
  //closeMain={closeMain}
  //showAbout={showAbout}
  //openAbout={openAbout}
  //closeAbout={closeAbout}
  //---------------------
  // console.log('user in NavBar', props.user)
  // console.log('isLoggedIn in NavBar', props.isLoggedIn)


// //-------------------------------
// const closeInbox = (e) => {
//   e.preventDefault()
//   props.setShowInbox(false)
// }

// const openInbox = (e) => {
//   e.preventDefault()
//   props.setShowInbox(true)
//   props.setShowMain(false)
//   props.setShowAbout(false)
// }
// //-------------------------------
// const closeAbout = (e) => {
//   e.preventDefault()
//   props.setShowAbout(false)
// }

// const openAbout = (e) => {
//   e.preventDefault()
//   props.setShowAbout(true)
//   props.setShowMain(false)
//   props.setShowInbox(false)
// }

// //-----------------------------
// const closeMain = (e) => {
//   e.preventDefault()
//   props.setShowMain(false)
//   // setShowAbout(false)
// }

// const openMain = (e) => {
//   e.preventDefault()
//   props.setShowMain(true)
//   props.setShowAbout(false)
//   props.setShowInbox(false)
// }
// //----------------------------



return(
    <ul>
          <li>
          <button onClick={(e)=> {props.openMain(e)}} > Home </button>
          </li>
          ||
          <li>
            <button onClick={(e)=> {props.openAbout(e)}}>About</button>
          </li>
          ||
          <li>
            <button onClick={(e)=> {props.openInbox(e)}}>Inbox</button>
          </li>
          ||
          <li>
            <button onClick={()=> props.logout()}> Log Out </button>
          </li>
    </ul>
      )
}

export default NavBar