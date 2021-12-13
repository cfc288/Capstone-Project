
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Link, Routes, Route} from 'react-router-dom';
import ReactModal from 'react-modal';
// import DisplayClients from '../displayClients/displayClients';
import DisplayOneClient from '../displayOneClient/displayOneClient';
import Inbox from '../Inbox/inbox.js';
// import NavBar from '../NavBar/NavBar.js'
// import About from '../About/about.js';
// import Inbox from '../Inbox/inbox.js';
// import Check from '../Check/check'
// import ClientHome from '../ClientHome/clientHome.js';
// import EmployeeHome from '../EmployeeHome/employeeHome.js';
// import UserProfile from '../Profile/profile.js'


const baseUrl = 'http://localhost:8000/api/v1/'

function Main(props) {
// user={activeUser} 
// isLoggedIn={isLoggedIn} 
// showMain={showMain}
console.log('user on main', props.user)
console.log('isLoggedIn on main', props.isLoggedIn)
        

    // const [isAdmin, setAdmin] = useState(false)
    const [incidents, setIncidents] = useState([])
    const [clientToBeUpdated, setClientToBeUpdated] = useState({})
    const [newName, setNewName] = useState('')
    const [showForm, setShowForm] = useState(false)
    const [clients, setClients] = useState([])
    const [showIncidentForm, setShowIncidentForm] = useState(false)
    const [newReport, setNewReport] = useState('')
    const [clientID, setClientID] = useState('')
    const [selectClient, setSelectClient] = useState({})
    const [selectClientId, setSelectClientID] = useState('')

 
    //#####
    const [display, setDisplay] = useState(false)
    const openModal = (id) => {
        setDisplay(true)
        setClientID(id)
        console.log('clientID onclick', clientID)
      }
    const closeModal =() => {
    setDisplay(false)
    }
    //######





    
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
            console.log('incidents array(on use effect)', incidents)
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
            console.log('selectClientID in addNewReport', selectClientId)
            console.log('selectClient in addNewReport', selectClient)
            console.log('clientID in addNewReport', clientID)
            console.log('baseUrl + incidents/newincident/client/ + selectClient', baseUrl + 'incidents/newincident/client/' + selectClient)
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
        console.log("delete route")
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
        //.then(fetchEverythingAgain())
        // console.log('clients delete route')
      }
    
    const filterIncidentsByClient = (id) => {
        return incidents.filter((incident)=>{
            return incident.client_referrence.id === id
        })
    }






    return(
        <>
    <div>
            <div>
                <p> show main is true </p>
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
                        </div>

                        : <button onClick={()=> setShowForm(true)}> New client </button>
                    }

                    <h3>Click on the clients name to see or add incident reports</h3>

                <div>
                    {clients.map((client) => {
                        return(
                        <table key={client.id} >
                            <tr>
                                <td> 
                                    <button onClick={() => {openModal( client.id)}}> {client.name} </button> 
                                </td>
                                <td>
                                    <button onClick={(e)=>{deleteOnClick(e, client.id)}}>Delete Client</button>
                                </td>
                            </tr>
                            
                            
                            <tr >
                                <td>Date/Time Created </td> ||
                                <td>Location</td> ||
                                <td>Company</td> ||
                                <td>EmployeeTitle</td> ||
                            </tr>
                            <ReactModal 
                            isOpen={display} clientID={clientID}>
                                <DisplayOneClient 
                                clientId={clientID}
                                client={clients}
                                user={props.user}
                                deleteClientOnClick={props.deleteOnClick} 
                                />
                                <button onClick={closeModal}>close modal displayClient.js
                                </button>
                            </ReactModal>

                                <tbody>
                                {
                                filterIncidentsByClient(client.id).map((report) => {
                                return (
                                    <tr key={report.client_referrence.id}>
                                        <td>
                                            {report.client_referrence.id}
                                        </td>
                                        <td>
                                            {report.created_at}
                                        </td>
                                            ||
                                        <td>
                                            {report.employee_data_ref.location}
                                        </td> 
                                            ||
                                        <td>
                                            {report.employee_data_ref.company}
                                        </td> 
                                            ||
                                        <td>
                                            {report.employee_data_ref.employee_title}
                                        </td> 
                                            ||
                                        
                                        
                                    </tr>
                                )
                            })}
                                </tbody> 
                        
                            </table>
                        )
                    })}
                    </div>          
                </div>
            </div>
        </div>
    </div>

    
    </>
    )

}

export default Main








{/* <p> showAbout is false</p>
            <Inbox 
            user={props.user} 
            isLoggedIn={props.isLoggedIn}
            showMain={props.showMain}
            showInbox={props.showInbox}
            showAbout={props.showAbout}
            /> */}


            // {
            //     showIncidentForm ?
            //         <form onSubmit={addNewReport} isOpen={showIncidentForm}>
                    

            //     <select value={selectClient} onChange={(e)=>{
            //         setSelectClient(e.target.value)
            //     }}> Select Client Here
            //         {
            //             clients.map((client)=> {
            //                 return (
            //                     <option value={client.id}> {client.name} </option>
            //                 )
            //             })
            //         }                                
            //     </select>


            //             <input id="report" type="text" name="report" value={newReport} onChange={(e) => setNewReport(e.target.value)} placeholder="Describe Incident Here"/>
                    
            //             <input type="submit" value="Add Report" onClick={(e)=>{setSelectClientID(selectClient.id)}}/><br />
            //             <button onClick={()=> setShowForm(false)}>close form</button>
            //         </form>
            // : null
            // }