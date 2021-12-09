
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Link, Routes, Route} from 'react-router-dom';
import ReactModal from 'react-modal';
import DisplayClients from '../displayClients/displayClients';
// import NavBar from '../NavBar/NavBar.js'
// import About from '../About/about.js';
// import Inbox from '../Inbox/inbox.js';
// import Check from '../Check/check'
// import ClientHome from '../ClientHome/clientHome.js';
// import EmployeeHome from '../EmployeeHome/employeeHome.js';
// import UserProfile from '../Profile/profile.js'


const baseUrl = 'http://localhost:8000/api/v1/'

function Main(props) {
    // user ={activeUser}
        
    const [clients, setClients] = useState([])
    const [clientToBeUpdated, setClientToBeUpdated] = useState({})
    const [newName, setNewName] = useState('')
    // const [showModal, setShowModal] = useState(false)

    
    // const [isAdmin, setAdmin] = useState(false)
    
    

    

    useEffect(() => {
        console.log('baseUrl+ incidents', baseUrl + 'incidents/')
        fetch( baseUrl + 'incidents/',  
        {
          credentials: 'include'
        })
        .then(res => res.json())
        .then(data => {
          if (data.status === 200) {
            setClients(data.data)
            console.log('data.data',data.data)
            console.log('clients array', clients)
          } 
        })
      }, [])
    //[] put into empty array


    const deleteOnClick = (event, id) => {
        // event.preventDefault()
        // fetch(baseUrl + 'clients' + `/${id}`, {
        //   method: 'DELETE',
        //   credentials: 'include'
        // })
        // .then(res => res.json())
        // .then(data => {
        //   if (data.status === 200) {
        //     const clientsCopy = [...clients]
        //     const foundIndex = clientsCopy.findIndex((client) => client.id === id)
        //     clientsCopy.splice(foundIndex, 1)
        //     setClients(clientsCopy)
        //   }
        // })
        console.log('clients delete route')
      }




    return(

        <div> 

            <h1>Main.js</h1>

            <DisplayClients clients={clients} deleteOnClick={deleteOnClick}/>

        </div>

    )
}

export default Main





