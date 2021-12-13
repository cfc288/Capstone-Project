import React, { Component, useState, useEffect } from 'react'
import ReactModal from 'react-modal';

const baseUrl = 'http://localhost:8000/api/v1/'



function NewMessage (props){
    //user={props.user}
    //closeModal={closeModal}

    const [allUsers, setAllUsers] = useState('')
    const [recieverName , setRecieverName] = useState('')
    const [recieverID, setRecieverID] = useState('')
    const [message, setMessage] = useState('')

    


    useEffect(() => {
        console.log('baseUrl + users/', baseUrl + 'users/')
        fetch( baseUrl + 'users/',  
        {
          credentials: 'include'
        })
        .then(res => res.json())
        .then(data => {
          if (data.status === 200) {
            setAllUsers(data.data)
            //console.log('data.data',data.data)
            //console.log('allReports', allReports)
          }
        console.log('allUsers on NewMessage: ', allUsers)
        })
      }, [])



//CREATE/NEW MESSAGE/Send
const newMessage = (event, recieverID) => {
    event.preventDefault()
     
    const createdMessage = {
        message: message,
    }

    console.log('baseUrl + messages/newmessage/reciever/ + recieverID: ', baseUrl + 'messages/newmessage/reciever/' + recieverID,)

    fetch(baseUrl + 'messages/newmessage/reciever/' + recieverID, {
        method: 'POST',
        body: JSON.stringify(createdMessage, 
            ),
        headers: {
        'Content-Type': 'application/json'
        },
        credentials: 'include'
    })
    .then(res => res.json())
    .then(data => {
        if (data.status === 201) {   
        console.log('message created')
        props.closeModal()
        } 
    })
    }

//get and Set RecieverID?

    const getReciverID = (e, username) => {
        e.preventDefault()
        console.log('recieverName', recieverName)
        console.log('matching???', allUsers.find((users) => users.username === username))
        const foundUser = allUsers.find((users) => users.username === username)
        setRecieverID(foundUser.id)
        console.log('foundUser?: ', foundUser)
        console.log('foundUserId: ', foundUser.id)
        console.log('recieverID: ', recieverID)
        newMessage(e, recieverID)
    }





    

    
    return (
        <>
        <div>
            <form onSubmit={(e)=>{getReciverID(e, recieverName)}} >
            <label >
                    Reciever:
                </label>
                <input type='text' id='name' name='name' onChange={(e) => setRecieverName(e.target.value)} value={recieverName} placeholder='Reciever'/>
                <br />
                <br />
                
                <label >
                    Message:
                </label>
                <input id="message" type="test" name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Email"/>
                <br />
                <br />
                <input type="submit" value="Send Message"/><br />
            </form>
        </div>
        </>
    )
}


export default NewMessage