import React, { Component, useState, useEffect } from 'react'
import './App.css';
import About from './About/about.js';
import Check from './Check/check.js';
import Login from './Login/login.js';
import Main from './Main/main.js';
import ReactModal from 'react-modal';
import Register from './Register/register';



function App(props){
//logIn={logIn}  
//isLoggedIn={isLoggedIn}
const [activeUser, setActiveUser] = useState({})
const [isEmployee, setEmployee] = useState(false)
const [isClient, setClient] = useState(false)
//---------------------------------------------------
const [display, setDisplay] = useState(false)
const openModal = () => {
  setDisplay(true)
}

const closeModal =() => {
  setDisplay(false)
}
//---------------------------------------------------

useEffect (()=> {
  console.log('props.isloggedin on App.js', props.isLoggedIn)
  
})

//---------------------------------------------------
  const [newDisplay, setNewDisplay] = useState(false)
  const openNewModal = () => {
      setNewDisplay(true)
    }
    
  const closeNewModal =() => {
      setNewDisplay(false)
  }

//---------------------------------------------------
  const [aboutDisplay, setAboutDisplay] = useState(false)
  const openAboutModal = () => {
      setAboutDisplay(true)
    }
    
  const closeAboutModal =() => {
      setAboutDisplay(false)
  }
//---------------------------------------------------


 
  return (
    <div>
      <button onClick={openAboutModal}> About </button>
      <ReactModal isOpen={aboutDisplay}>
          <button onClick={closeAboutModal}>close about modal App.js
          </button>
          <About />
      </ReactModal>


      { !props.isLoggedIn &&
        <div>
          <h1> Kelper (App.js) </h1>

          <button onClick={openModal}>Login </button>
          < ReactModal
            isOpen={display}>
            <Login logIn={props.logIn}/>
            <button onClick={closeModal}>close modal app</button>
          </ ReactModal >


          <a onClick={openNewModal}>  New User? Click here to register for a new account</a>
          < ReactModal 
            isOpen={newDisplay}>

              <Register logIn={props.logIn}/>
              <button onClick={closeNewModal}>close modal login</button>
          </ ReactModal>
          
        </div>  
      }
    </div>
  ) 
} 

export default App


