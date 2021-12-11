import React, { useEffect, useState } from 'react'
import ReactModal from 'react-modal';
import Login from '../Login/login.js';
import Main from '../Main/main.js';
import App from '../App';

import { BrowserRouter as Router, Switch, Link, Routes, Route} from 'react-router-dom';

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
                    <NavBar user={activeUser} logout={logout}/>
                    <Main user={activeUser} isLoggedIn={isLoggedIn}/> 
                    </div>

                    
                    : <App logIn={logIn}  isLoggedIn={isLoggedIn}/> 
                }
                </div>

                <div>
                        <Routes> 
                            <Route path='/()' />
                            <Route path='/about' element={<About />} />
                            <Route path='/inbox' element={<Inbox user={activeUser} />} />
                        </Routes>
                </div>

        
            
        </div>
    )
}

export default Check