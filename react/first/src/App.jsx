// npm install react-router-dom ---> install react router
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Service from './Service'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App