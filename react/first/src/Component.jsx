import React, { useContext } from 'react'
import { mainContext } from './App'

const Component = () => {
let {name} = useContext(mainContext)
  return (
    <div>
      <h1>Component === &gt; {name}</h1>
    </div>
  )
}

export default Component
