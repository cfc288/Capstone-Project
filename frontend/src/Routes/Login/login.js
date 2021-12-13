import React, { Component, useState, useEffect } from 'react'
import Register from '../Register/register'
import ReactModal from 'react-modal';
import About from '../About/about';

const baseUrl = 'http://localhost:8000/api/v1/users'

function Login (props){
    //logIn={props.logIn}
    const[email, setEmail] = useState('')
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')

//--------------------------
    const [display, setDisplay] = useState(false)
    const openModal = () => {
        setDisplay(true)
    }
    const closeModal =() => {
    setDisplay(false)
}
//----------------------------






    const fetchLogin = (e) => {
        e.preventDefault()
        const user = {email, password, username}

        fetch(baseUrl + '/login', {
            method: 'Post',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.status === 200) {
                setEmail('')
                setUsername('')
                setPassword('')
                props.logIn(data.data)
            }
        })
    }







    

    
        return (
            <div>
                
                <h1> Login/Register Modal</h1>

                
                <form onSubmit={fetchLogin}>
                    <label >
                        Username:
                    </label>
                    <input type='text' id='name' name='name' onChange={(e) => setUsername(e.target.value)} value={username} placeholder='Username'/>
                    <br />
                    <label >
                        Email:
                    </label>
                    <input id="email" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                    <br />
                    <label >
                        Password:
                    </label>
                    <input type='text' id='password' name='password' onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Password'/>
                    <br />
                    <input type="submit" value="Log In"/><br />

                </form>
                <br />
                <br />
                <br />
                


                
            </div>

        )
    
    
}


export default Login