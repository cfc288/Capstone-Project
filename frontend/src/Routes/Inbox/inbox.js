import React, { Component, useState, useEffect } from 'react'
import ReactModal from 'react-modal';



const baseUrl = 'http://localhost:8000/api/v1/'

function Inbox (props) {
    // //user={activeUser}
    // console.log(props.user)
    // const [messages, setMessages] = useState([])
    // //setSender
    // //setReciever
    // //setMessage

    // useEffect(() => {
    //     console.log('baseUrl+ messages', baseUrl + 'messages/')
    //     fetch(baseUrl + 'messages/allmessagesperuser/',
    //     {
    //         credentials: 'include'
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         if (data.status === 200) {
    //           setMessages(data.data)
    //           console.log('data.data',data.data)
    //         } 
    //       })
    //   }, [])

    //   //create
    //   //delete


    return (
        
        <div>
            <h1>Inbox Page</h1>
        </div>


    )
    
}

export default Inbox
