import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Help from './pages/Help'
import './index.css'
import Booking from './pages/Booking'
import BusSeat from './pages/ExecBusSeat'
import ExecBusSeat from './pages/ExecBusSeat'

function App(){
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Help" element={<Help />} />
                <Route path="/Booking" element={<Booking />}/>
                <Route path="/ExecBusSeat" element={<ExecBusSeat />} />
            </Routes>
    )
}

export default App;
