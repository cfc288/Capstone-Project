import React, { Component, useState } from 'react'


function Main(){
    return(
        <div>
            
            <Router>
                <div>
                    <NavBar />
                    <hr />
                
                    <Routes>
                    <Route path='/Main' element={<Main />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='/inbox' element={<Inbox />} />
                    <Route path='/profilepage' element={<Profile />} />
                    
                    </Routes>
                </div>
            </Router>

            <header>
                Main User Page

                If Client display <ClientHome />
                If Employee display <EmployeeHome />
            </header>

        </div>
    )
}

export default Main