import React, { useContext } from 'react'
import mainImg from './assets/react.svg'
import Component from './Component'
import { mainContext } from './App'

const Home = (props) => {
    let contextValue = useContext(mainContext)
    return (
        <div>

            <h1>name : {props.user.name}</h1>
            <h1>name : {contextValue.name}</h1>
            <h2>Coding cloud is the best.</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <img className='image' src={mainImg} alt="" />
            <hr />
            <Component  />
        </div>
    )
}

export default Home
