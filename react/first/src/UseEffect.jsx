import React, { useEffect, useRef, useState } from 'react'

const UseEffect = () => {
    let [count,setCount] = useState(0)
    let [count2,setCount2] = useState(0)

    let Head = useRef()
    useEffect(() => {
        console.log('render');
        
       Head.current.innerHTML = 'coding cloud'

    },[count])

    return (
        <div>
            <h1 ref={Head}>useEffect</h1>
            <h2>Count : {count}</h2>
            <h2>Count : {count2}</h2>

            <button onClick={()=>setCount(count + 1)}>Count++</button>
            <button onClick={()=>setCount2(count2 + 1)}>Count2++</button>
            
        </div>
    )
}

export default UseEffect
