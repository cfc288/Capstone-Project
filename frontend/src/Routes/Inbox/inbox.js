import React, { Component, useState, useEffect } from 'react'
import ReactModal from 'react-modal';
import NewMessage from '../NewMessage/NewMessage';



const baseUrl = 'http://localhost:8000/api/v1/'

function Inbox (props) {
    //user={activeUser}
    //showMain={showMain}
    //showAbout={showAbout}
    //showInbox={showInbox}
    
    console.log('user on Inbox', props.user)
    console.log('isLoggedIn on Inbox', props.isLoggedIn)

    const [display, setDisplay] = useState(false)
    const [openNewMessage, setOpenNewMessages] = useState(false)

    const [allUserMessages, setAllUserMessages] = useState([])


 //---------------------------   
    const openModal = () => {
        setDisplay(true)
      }
      
      const closeModal =() => {
        setDisplay(false)
      }
//------------------------------



//USE EFFECT
    useEffect(()=>{
        console.log('baseUrl+ messages/allmessagesperuser', baseUrl + 'messages/allmessagesperuser')
        fetch(baseUrl + 'messages/allmessagesperuser',
        {
            credentials: 'include'
        })
        .then(res => res.json())
        .then(data => {
            if (data.status === 200) {
                // const copyMessages = [data.data]
                setAllUserMessages(data.data)
                console.log('data.data, inside',data.data)
                console.log('messages inside', allUserMessages)
            } 
            console.log('messages on Inbox, outside', allUserMessages)
        }) 
    }, []) 


//delete message
const deleteMessageOnClick = (e, id) => {
    e.preventDefault()
    fetch(baseUrl + 'incidents' + `/${id}`, {
      method: 'DELETE',
      credentials: 'include'
    })
    .then(res => res.json())
    .then(data => {
      if (data.status === 200) {
        const messagesCopy = [...allUserMessages]
        const foundIndex = messagesCopy.findIndex((message) => message.id === id)
        messagesCopy.splice(foundIndex, 1)
        setAllUserMessages(messagesCopy)
      }
    })
    //console.log('report delete route')
  }


    return (
        <div>
                <div>
                    <div>
                        <h1>Message Inbox</h1>
                        <br />
                        <select> 
                            <option> Sort By: </option>
                            <option> Sender (Alphabetical) </option>
                            <option> Newest First </option>
                            <option> Oldest First </option>
                        </select> 
                        |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

                        <button onClick={openModal}> Send New Message </button>
                        <ReactModal isOpen={display}>
                            <NewMessage
                            user={props.user}
                            closeModal={closeModal}
                            />
                            <button onClick={closeModal}>close modal inbox</button>
                        </ReactModal >
                    


                        <br />
                        <select> 
                            <option> Search Messages By?: </option>
                            <option> Sender (Alphabetical) </option>
                            <option> Newest First </option>
                            <option> Oldest First </option>
                        </select>

                        <div>
                            <table >
                                { 
                                    allUserMessages.map((message)=>{
                                        return (
                                            <tbody key={message.id}>
                                                <tr>
                                                    <td>Sent by:</td>
                                                    <td> {message.reciever.username} </td>
                                                    <td> </td>
                                                    
                                                </tr>
                                                <tr>
                                                    <td>{message.message}</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <button onClick={(e)=>{deleteMessageOnClick(e, message.id)}}> Delte Message</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                                )
                                        })}
                                        
                             </table>
                        </div>

                    </div>
                </div>
        </div>
    )
    
}

export default Inbox
