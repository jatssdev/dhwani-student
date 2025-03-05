// npm install react-router-dom ---> install react router
import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Service from './Service'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UseState from './UseState'
import UseRaf from './UseRaf'
import UseEffect from './UseEffect'
export let mainContext = createContext()
function App() {
  let [user, setUSer] = useState({
    name: 'jatin raval', skill: 'mern stack developer'
  })
  let contextValues = {
    name: 'dhwani',
    
  }
  return (
    <>
      <BrowserRouter>
        <mainContext.Provider value={contextValues}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home user={user} />} />
            <Route path='/about' element={<About userName={user.name} age={22} />} />
            <Route path='/service' element={<Service />} />
            <Route path='/state' element={<UseState />} />
            <Route path='/raf' element={<UseRaf />} />
            <Route path='/effect' element={<UseEffect />} />

          </Routes>
        </mainContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App