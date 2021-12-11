
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
//isLoggedIn={isLoggedIn
console.log('user on main', props.user)
        
    // const [isAdmin, setAdmin] = useState(false)
    const [incidents, setIncidents] = useState([])
    const [clientToBeUpdated, setClientToBeUpdated] = useState({})
    const [newName, setNewName] = useState('')
    const [showForm, setShowForm] = useState(false)
    const [clients, setClients] = useState([])
    const [showIncidentForm, setShowIncidentForm] = useState(false)
    const [newReport, setNewReport] = useState('')
    const [selectClient, setSelectClient] = useState('')

 
    

    
    useEffect(() => {
        console.log('baseUrl+ incidents', baseUrl + 'incidents/')
        fetch(baseUrl + 'clients/',
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
        //other fetch
        fetch( baseUrl + 'incidents/',  
        {
          credentials: 'include'
        })
        .then(res => res.json())
        .then(data => {
          if (data.status === 200) {
            setIncidents(data.data)
            console.log('data.data', data.data)
            console.log('clients array', incidents)
          } 
        })
      }, [])
    //[] put into empty array (component did mount)
    //[clients] like ocmpnent did update
    
    
//ADD NEW CLIENT
    const addNewClient = (event) => {
        event.preventDefault() 
        const newClient = {
          name: newName,
          // ^ client_referrence.name?
          //client.employee_data_ref.location
          //client.employee_data_ref.employee_title
          //client.employee_data_ref.company
          //?how to add employee info?
          //

        }
        fetch(baseUrl + 'clients/', {
          method: 'POST',
          body: JSON.stringify(newClient),
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        })
        .then(res => res.json())
        .then(data => {
           if (data.status === 201) {   
            const clientsCopy = [...clients, data.data]
            setClients(clientsCopy)
            } 
        })
        .then(()=> setShowIncidentForm(true))
      }


//ADD NEW REPORT/INCIDENT
    const addNewReport = (event) => {
    event.preventDefault() 
    const newIncident = {
        incident_event: newReport,

    }
    fetch(baseUrl + 'incidents/newincident/client/' + selectClient, {
        method: 'POST',
        body: JSON.stringify(newIncident, 
            //flagged_for_review=false (this defaults false on backend, do i need?)
            ),
        headers: {
        'Content-Type': 'application/json'
        },
        credentials: 'include'
    })
    .then(res => res.json())
    .then(data => {
        if (data.status === 201) {   
        const incidentsCopy = [...incidents, data.data]
        setIncidents(incidentsCopy)
        } 
    })
    }

    

    const deleteOnClick = (event, id) => {
        event.preventDefault()
        fetch(baseUrl + 'clients' + `/${id}`, {
          method: 'DELETE',
          credentials: 'include'
        })
        .then(res => res.json())
        .then(data => {
          if (data.status === 200) {
            const clientsCopy = [...clients]
            const foundIndex = clientsCopy.findIndex((client) => client.id === id)
            clientsCopy.splice(foundIndex, 1)
            setClients(clientsCopy)
          }
        })
        // console.log('clients delete route')
      }

      //update/edit client
      //update/edit incident?

    return(
    <div>
        <div> 

            <h1>Main.js</h1>
            

            
            {
                showForm ? 
                <div>
                <div>
                <form onSubmit={addNewClient} isOpen={showForm}> 
				<input id="name" type="text" name="name" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Name of Client"/>
				
				<input type="submit" value="Add Client"/><br />
                <button onClick={()=> setShowForm(false)}>close form</button>
			    </form> 
                </div>
                {
                    showIncidentForm ?
                    <form onSubmit={addNewReport} isOpen={showIncidentForm}>
                    <select value={selectClient} onChange={(e)=>{
                        setSelectClient(e.target.value)
                    }}> 
                        {
                            clients.map((client)=> {
                                return (
                                    <option value={client.id}> {client.name} </option>
                                )
                            })
                        }
                        
                    </select>
                    <input id="report" type="text" name="report" value={newReport} onChange={(e) => setNewReport(e.target.value)} placeholder="Describe Incident Here"/>
				
                    <input type="submit" value="Add Report"/><br />
                    <button onClick={()=> setShowForm(false)}>close form</button>
                </form>
                : null
                }
               
                </div>

                : <button onClick={()=> setShowForm(true)}> New client </button>
            }

            <h3>Click on the clients name to see or add incident reports</h3>

            <DisplayClients 
            incidents={incidents} 
            clients={clients} 
            user={props.user}
            deleteOnClick={deleteOnClick}/>

        </div>
    </div>
    )
}

export default Main





