import React, { Component, useState } from 'react'
import ReactModal from 'react-modal';


const baseUrl = 'http://localhost:8000/api/v1/users'

export default function Register(props) {
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

    const [location, setLocation] = useState('')
    const [company, setCompany] = useState('')
    const [employeeTitle, setTitle] = useState('')




    const [display, setDisplay] = useState(false)
    const openModal = () => {
    setDisplay(true)
    }
    const closeModal =() => {
    setDisplay(false)
    }

    const [newDisplay, setNewDisplay] = useState(false)
    const openNewModal = () => {
        setNewDisplay(true)
    }
    const closeNewModal =() => {
        setNewDisplay(false)
    }

    



	const fetchRegister = (e) => {
		e.preventDefault()
		const newUser = {username, email, password, company, location, employeeTitle}
        console.log('baseURL for register', baseUrl + '/register')
		fetch(baseUrl + '/register', {
			method: 'POST',
			body: JSON.stringify(newUser),
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include'
		})
		.then(res => res.json())
		.then(data => {
			if (data.status === 201) {
				console.log('data', data)
				console.log('props', props)
				setUsername('')
				setEmail('')
				setPassword('')
                setCompany('')
                setLocation('')
                setTitle('')
				props.logIn(data.data)
			}
		})
	}

	return (
		<div>


            <button onClick={openModal}>For employees </button>
            < ReactModal
                isOpen={display}>
                <form onSubmit={fetchRegister}>
                    <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"/><br />
                    
                    <input id="email" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/><br />
                   
                    <input id="password" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/><br />

                    <input id="location" type="location" name="location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location"/><br />

                    <input id="company" type="company" name="company" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company"/><br />

                    <input id="employee_title" type="employeeTitle" name="employeeTitle" value={employeeTitle} onChange={(e) => setTitle(e.target.value)} placeholder="Your Title of Employement ie: Manager "/><br />


                    <input type="submit" value="Register"/><br />
                </form>
                <button onClick={closeModal}>close modal register</button>
            </ReactModal>


            <button onClick={openNewModal}>For Clients </button>
            < ReactModal
                isOpen={newDisplay}>
                <form onSubmit={fetchRegister}>
                    <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"/><br />
                    
                    <input id="email" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/><br />
                    
                    <input id="password" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/><br />

                    <input id="location" type="location" name="location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location"/><br />

                    <input type="submit" value="Register"/><br />
                </form>
                <button onClick={closeNewModal}>close modal register</button>
            </ReactModal>



		</div>
		)
}
