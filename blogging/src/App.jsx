import {BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Home  from './pages/Home'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Projects from './pages/Projects'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the root URL, e.g., http://localhost:5173/ */}
        <Route path="/" element={<Home />} />      
        
        {/* ADDED: Route for the /home URL, e.g., http://localhost:5173/home */}
        <Route path="/home" element={<Home />} />      
        
        <Route path="/about" element={<About />} />      
        <Route path="/sign-in" element={<SignIn />} />      
        <Route path="/sign-up" element={<SignUp />} />      
        <Route path="/dashboard" element={<Dashboard />} />      
        <Route path="/project" element={<Projects />} />      
     
      </Routes>
    </BrowserRouter>
  )
}
