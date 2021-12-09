
import ReactModal from 'react-modal';
import React, { Component, useState, useEffect } from 'react'
import DisplayOneClient from '../displayOneClient/displayOneClient';
import { Routes, Route, Link } from "react-router-dom";

export default function DisplayClients(props) {
	console.log('clients on render', props.clients)


    const [display, setDisplay] = useState(false)
    const openModal = () => {
        setDisplay(true)
      }
    const closeModal =() => {
    setDisplay(false)
    }

	return(
		<div >
            <button> New client </button>
			<table>
				<thead>
					<tr>
						<td>Name</td>||
						<td>Location</td> ||
						<td>Company</td> ||
                        <td>EmployeeTitle</td> ||
                        <td>Incident Report </td> ||
						<td>Delete</td>
					</tr>
				</thead>
            
				<tbody>
					{props.clients.map((client) => {
						return (
							<tr key={client.client_referrence.id}>
                                
                                <td> <button onClick={openModal}> {client.client_referrence.name} </button> 
                                </td> 
                                <ReactModal isOpen={display}>
                                    <DisplayOneClient 
                                    client={client} deleteClientOnClick={props.deleteOnClick} 
                                    />
                                    <button onClick={closeModal}>close modal displayClient.js
                                    </button>
                                </ReactModal>
                                ||
								<td>{client.employee_data_ref.location}</td> ||
                                <td>{client.employee_data_ref.employee_title}</td> ||
								<td>{client.employee_data_ref.employee_title}</td> ||
								<td><button onClick={(e)=>{props.deleteOnClick(e, client.id)}}>Delete Client</button></td>
							</tr>
                        )
					})}
				</tbody>
            
			</table>
		</div>
	)
}