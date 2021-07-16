import React from 'react'

function ClickCounter() {
    
    const [language,setLanguage]=React.useState("en");
    const [count,setCount]=React.useState(0)

    const incrementCounter=()=>{
        setCount(count+1);
    }

    return (
        <div data-test="component-click-counter">
            <h1 data-test='counter-display'>The counter is currently <span data-test="count">{count}</span> </h1>
            <button data-test="increment-button" onClick={incrementCounter}>Increment Counter</button>
        </div>
    )
}

export default ClickCounter
