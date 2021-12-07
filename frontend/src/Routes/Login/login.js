import React, { Component, useState } from 'react'
import Register from '../Register/register'
import ReactModal from 'react-modal';


import {
    BrowserRouter as Router,
    Switch,
    Link
  } from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';



function Login () {

    const [showModalLogin, setModal] = useState(false)
    const showModal = () => {
        setModal(true)
    }






    return (
        <div>
            <h1> Login/Register </h1>


            <title> Login </title>
            
            <form >
                <label >
                    username:
                </label>
                <input type='text' id='name' name='name' onChange={ (event) => this.handleChange(event)} value={this.state.username}/>
                <label >
                    email:
                </label>
                <input type='text' id='email' name='email' onChange={ (event) => this.handleChange(event)} value={this.state.email}/>
                <label >
                    password:
                </label>
                <input type='text' id='password' name='password' onChange={ (event) => this.handleChange(event)} value={this.state.password}/>
            </form>
           

            <ReactModal isOpen={showModal} >
                <h2> New User? </h2>
                <h3> Register Here </h3>
                <Register />
            </ReactModal>


            
        </div>

    )
}

export default Login