import React, { useState } from 'react'

const UseState = () => {
    let [name, setName] = useState('jatin')
    let [count, setCount] = useState(0)

    let ChangeValue = () => {
        setName('dhwani')
        setCount(count + 1)
    }
    return (
        <div>
            <h1>Use States : {name} =&gt; {count}</h1>
            <button onClick={ChangeValue}>Click</button>
        </div>
    )
}

export default UseState
