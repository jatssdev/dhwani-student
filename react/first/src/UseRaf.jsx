import React, { useRef } from 'react'

const UseRaf = () => {
    let heading = useRef()
    let ChangeColor = () => {
        console.log(heading.current.innerHTML);
        heading.current.style.color = 'red'
    }
    return (
        <div>
            <h1 ref={heading}>Hello world</h1>
            <button onClick={ChangeColor}>Change</button>
        </div>
    )
}

export default UseRaf