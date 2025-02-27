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
import UseState from './UseState'
function App() {
  let [user, setUSer] = useState({
    name: 'jatin raval', skill: 'mern stack developer'
  })
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home user={user} />} />
          <Route path='/about' element={<About userName={user.name} age={22} />} />
          <Route path='/service' element={<Service />} />
          <Route path='/state' element={<UseState />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App