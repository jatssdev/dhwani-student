import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import mainImg from './assets/react.svg'

function App() {
  let name = 'jatin'

  return (
    <>
      <h1>name : {name}</h1>
      <h2>Coding cloud is the best.</h2>
      <p>Lorem ipsum dolor sit amet.</p>
      <img className='image' src={mainImg} alt="" />
    </>
  )
}

export default App