import React, { useEffect, useState } from 'react'
import ReactModal from 'react-modal';
import Login from '../Login/login.js';
import Main from '../Main/main.js';
import App from '../App';



import NavBar from '../NavBar/NavBar.js'
import About from '../About/about.js';
import Inbox from '../Inbox/inbox.js';
// import ClientHome from '../ClientHome/clientHome.js';
// import EmployeeHome from '../EmployeeHome/employeeHome';
import UserProfile from '../Profile/profile'

const baseUrl = 'http://localhost:8000/api/v1/'

function Check(props){

    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activeUser, setActiveUser] = useState({});
    const [showMain, setShowMain] = useState(true)
    const [messages, setMessages] = useState([])
    const [showAbout, setShowAbout] = useState(false)
    const [showInbox, setShowInbox] = useState(false)
    



//-------------------------------
    const closeInbox = (e) => {
        e.preventDefault()
        setShowInbox(false)
    }

    const openInbox = (e) => {
        e.preventDefault()
        setShowInbox(true)
        setShowMain(false)
        setShowAbout(false)
    }
//-------------------------------
    const closeAbout = (e) => {
        e.preventDefault()
        setShowAbout(false)
    }

    const openAbout = (e) => {
        e.preventDefault()
        setShowAbout(true)
        setShowMain(false)
        setShowInbox(false)
    }

//-----------------------------
    const closeMain = (e) => {
        e.preventDefault()
        setShowMain(false)
        // setShowAbout(false)
    }

    const openMain = (e) => {
        e.preventDefault()
        setShowMain(true)
        setShowAbout(false)
        setShowInbox(false)
    }
//----------------------------
    
    const logIn = (user) => {
      setActiveUser(user)
      setIsLoggedIn(true)
    }

    const logout = () => {
        fetch(baseUrl + 'users/logout', { credentials: 'include'})
        .then(res => res.json())
        .then(data => {
          if (data.status === 200) {
            setIsLoggedIn(false)
            setActiveUser(null)
          }
        })
      }
    
    useEffect (()=> {
        console.log(isLoggedIn)
        

    })

    return(
        <div >
            <div >
                {
                    isLoggedIn ? 
                        <div>
                            <NavBar 
                            logout={logout} 
                            user={activeUser} 
                            isLoggedIn={isLoggedIn}
                            closeMain={closeMain}
                            closeAbout={closeAbout}
                            showAbout={showAbout}
                            showMain={showMain} 
                            showInbox={showInbox}
                            openInbox={openInbox}
                            openAbout={openAbout}
                            openMain={openMain}
                            />

                                    <div>
                                        
                                        <div>
                                            { showMain ?
                                                <Main 
                                                    user={activeUser} 
                                                    isLoggedIn={isLoggedIn} 
                                                    showMain={showMain}
                                                    showAbout={showAbout}
                                                    showInbox={showInbox}
                                                    openInbox={openInbox}
                                                    openAbout={openAbout}
                                                    openMain={openMain}
                                                />
                                            : <p> showMain is false</p>
                                            }
                                        </div>

                                        <div>
                                            { showAbout ? 
                                                <About 
                                                    user={activeUser} 
                                                    isLoggedIn={isLoggedIn}
                                                    showMain={showMain}
                                                    showAbout={showAbout}
                                                    showInbox={showInbox}
                                                    openInbox={openInbox}
                                                    openAbout={openAbout}
                                                    openMain={openMain}
                                                />
                                            : <p>showAbout is false</p>
                                            }
                                        </div>

                                        <div>
                                            { showInbox ? 
                                                <Inbox 
                                                    user={activeUser} 
                                                    isLoggedIn={isLoggedIn}
                                                    showMain={showMain}
                                                    showAbout={showAbout}
                                                    showInbox={showInbox}
                                                    openInbox={openInbox}
                                                    openAbout={openAbout}
                                                    openMain={openMain}
                                                />
                                            : <p>showInbox is false </p>
                                            }
                                        </div>

                                    </div>   
                        </div>                    
                    : <App logIn={logIn}  isLoggedIn={isLoggedIn}/> 
                }

            </div>
        </div>
    )
}

export default Check




{/* <div>
                        <Routes> 
                            <Route path='/()' 
                                user={activeUser} 
                                isLoggedIn={isLoggedIn}
                                showMain={showMain}
                                showAbout={showAbout}
                                showInbox={showInbox}
                            />

                            <Route path='/about' 
                                element={
                                    <About 
                                    
                                    />
                                } 
                            />

                            <Route path='/inbox' 
                                element={
                                    <Inbox 
                                    
                                    />
                                } 
                            />
                        </Routes>
                </div> */}