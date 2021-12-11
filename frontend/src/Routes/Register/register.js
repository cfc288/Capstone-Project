import React, { Component, useState } from 'react'
import ReactModal from 'react-modal';


const baseUrl = 'http://localhost:8000/api/v1/users'

export default function Register(props) {
	const [newUsername, setUsername] = useState('')
	const [newEmail, setEmail] = useState('')
	const [newPassword, setPassword] = useState('')

    const [newLocation, setLocation] = useState('')
    const [newCompany, setCompany] = useState('')
    const [newEmployeeTitle, setTitle] = useState('')
    const [isEmployee, setIsEmployee] = useState(false)
    const [isClient, setIsClient] = useState(false)
    //const [isClient, setIsClient] = useState(false)




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

    



	const registerEmployee = (e) => {
		e.preventDefault()
		const newUser = {
            username: newUsername, 
            email: newEmail, 
            password: newPassword, 
            company: newCompany, 
            location: newLocation, 
            employeeTitle: newEmployeeTitle,
            isAdmin:false,
            isClient: false,
            isEmployee: true}
            console.log(newUser)
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
                setIsEmployee(true)
				props.logIn(data.data)
			}
		})
	}

    const registerClient = (e) => {
		e.preventDefault()
		const newUser = {
            username: newUsername, 
            email: newEmail, 
            password: newPassword,  
            location: newLocation,
            isClient: true,
            isAdmin:false,
            isEmployee: false }
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
                setCompany('none')
                setLocation('')
                setTitle('none')
                setIsClient(true)
				props.logIn(data.data)
			}
		})
	}

	return (
		<div>


            <button onClick={openModal}>For employees </button>
            < ReactModal
                isOpen={display}>
                <form onSubmit={registerEmployee}>
                    <input id="username" type="text" value={newUsername} onChange={(e) => setUsername(e.target.value)} placeholder="Username"/><br />
                    
                    <input id="email" type="email" name="email" value={newEmail} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/><br />
                   
                    <input id="password" type="password" name="password" value={newPassword} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/><br />

                    <input id="location" type="location" name="location" value={newLocation} onChange={(e) => setLocation(e.target.value)} placeholder="Location"/><br />

                    <input id="company" type="company" name="company" value={newCompany} onChange={(e) => setCompany(e.target.value)} placeholder="Company"/><br />

                    <input id="employee_title" type="employeeTitle" name="employeeTitle" value={newEmployeeTitle} onChange={(e) => setTitle(e.target.value)} placeholder="Your Title of Employement ie: Manager "/><br />


                    <input type="submit" value="Register"/><br />
                </form>
                <button onClick={closeModal}>close modal register</button>
            </ReactModal>


            <button onClick={openNewModal}>For Clients </button>
            < ReactModal
                isOpen={newDisplay}>
                <form onSubmit={registerClient}>
                    <input id="username" type="text" value={newUsername} onChange={(e) => setUsername(e.target.value)} placeholder="Username"/><br />
                    
                    <input id="email" type="email" name="email" value={newEmail} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/><br />
                    
                    <input id="password" type="password" name="password" value={newPassword} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/><br />

                    <input id="location" type="location" name="location" value={newLocation} onChange={(e) => setLocation(e.target.value)} placeholder="Location"/><br />

                    <input type="submit" value="Register"/><br />
                </form>
                <button onClick={closeNewModal}>close modal register</button>
            </ReactModal>



		</div>
		)
}
