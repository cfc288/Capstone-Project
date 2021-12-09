import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";

const baseUrl = 'http://localhost:8000/api/v1/'

export default function DisplayOneClient(props) {
	console.log('clients on render', props.client)
    const [allReports, setReports] = useState([])
    const [reportToBeUpdated, setReportsToBeUpdated] = useState({})
    const [newReport, setNewReport] = useState('')


    useEffect(() => {
        console.log('baseUrl+ incidents', baseUrl + 'incidents/allreportsperclient/' + props.client.client_referrence.id )
        fetch( baseUrl + 'incidents/allreportsperclient/' + props.client.client_referrence.id,  
        {
          credentials: 'include'
        })
        .then(res => res.json())
        .then(data => {
          if (data.status === 200) {
            setReports(data.data)
            console.log('data.data',data.data)
            console.log('reports array', allReports)
          } 
        })
      }, [])


    // const addNewReport = (event) => {
    //     event.preventDefault()
        
    //     const newReport = {
    //       name: newName,
    //       breed: newBreed
    //     }
    
    //     fetch(baseUrl + '/', {
    //       method: 'POST',
    //       body: JSON.stringify(newDog),
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       credentials: 'include'
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //       if (data.status === 201) {
    //         setDogs([...dogs, data.data])
    //         setNewName('')
    //         setNewBreed('')
    //         console.log(data.message)
    //       } else {
    //         console.log('Dog creation was unsuccessful. D=')
    //       }
    //     })
    //   }






    
    const deleteIncidentOnClick = (id) => {
        console.log('baseUrl + incidents + `/${id}` ',baseUrl + 'incidents' + `/${id}`)
        // event.preventDefault()
        fetch(baseUrl + 'incidents' + `/${id}`, {
          method: 'DELETE',
          credentials: 'include'
        })
        .then(res => res.json())
        .then(data => {
          if (data.status === 200) {
            const reportsCopy = [...allReports]
            const foundIndex = reportsCopy.findIndex((report) => report.id === id)
            reportsCopy.splice(foundIndex, 1)
            setReports(reportsCopy)
          }
        })
        console.log('report delete route')
      }

	return(
		<div >
            <h1> {props.client.client_referrence.name} </h1>
            <button onClick={(e)=>{props.deleteOnClick(e, props.client.client_referrence.id)}}>Delete Client</button>
			<table>
				<thead>
					<tr>
						<td>Date Report Created</td>
						<td>Location</td> ||
						<td>Company</td> ||
                        <td>EmployeeTitle</td> ||
                        <td>Incident Report</td> ||
						<td>Delete</td>
					</tr>
                    
				</thead>
            
				<tbody>




                {allReports.map((report) => {
						return (
							<tr key={report.client_referrence.id}>
                                <td>{report.created_at}</td>

								<td>{report.employee_data_ref.location}</td> ||
                                <td>{report.employee_data_ref.company}</td> ||
								<td>{report.employee_data_ref.employee_title}</td> ||
                                <td> {report.incident_event} </td>
                                <td><button onClick={(e)=>{deleteIncidentOnClick( report.id)}}>Delete Report</button></td>
							</tr>
                            
                        )
					})}
                    

                


				</tbody>
            
			</table>
		</div>
	)
}

// {props.clients.incident_event.map((incident) => {
//     <tr key={props.client.incident_event.id} >
//     <td>{incident}</td> ||
//     </tr>
// })}
{/* <tr key={props.client.client_referrence.id}>
                        <td> 
                        </td> 
                        
                        ||
                        <td>{props.client.employee_data_ref.location}</td> ||
                        <td>{props.client.employee_data_ref.employee_title}</td> ||
                        <td>{props.client.employee_data_ref.employee_title}</td> ||
                        
                        
                        <td><button onClick={(e)=>{props.deleteClientOnClick(e, props.client.id)}}>Delete Client</button></td>
                    </tr> */}

{/* <ReactModal isOpen={display}>
                                    <DisplayOneClient 
                                    client={client} deleteClientOnClick={props.deleteOnClick} 
                                    />
                                    <button onClick={closeModal}>close modal displayClient.js
                                    </button>
                                </ReactModal> */}