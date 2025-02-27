import React from 'react'
import mainImg from './assets/react.svg'

const Home = (props) => {
    return (
        <div>

            <h1>name : {props.user.name}</h1>
            <h2>Coding cloud is the best.</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <img className='image' src={mainImg} alt="" />
        </div>
    )
}

export default Home
