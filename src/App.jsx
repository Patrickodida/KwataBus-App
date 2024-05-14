import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Help from './pages/Help'
import './index.css'
import Booking from './pages/Booking'
import ExecBusSeat from './pages/ExecBusSeat'
import OrdBusSeat from './pages/OrdBusSeat'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function Layout({children}){
    return (
        <>
        <Navbar />
        {children}
        <Footer />
        </>
    )
}

function App(){
    return (
            <Routes>
                <Route element={<Layout />} />
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Help" element={<Help />} />
                <Route path="/Booking" element={<Booking />}/>
                <Route path="/ExecBusSeat" element={<ExecBusSeat />} />
                <Route path="/OrdBusSeat" element={<OrdBusSeat />} />
                
            </Routes>
    )
}

export default App;
