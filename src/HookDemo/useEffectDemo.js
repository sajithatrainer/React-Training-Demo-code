import { useEffect, useState } from "react";

const SimpleUseEffectDemo =() =>{

    const [value1, setValue1] =useState("")
    const [value2, setValue2] =useState("")

    const [counter, setCounter] =useState(0)

    useEffect(() => {
        setCounter(counter+1)
        console.log(`***UseEffect 1 value ${value1}`)
    },[value1]) 

    useEffect(() => {
        console.log(`----useEffect 2 value ${value2}`)
    },[value2]) 


    return <>

    <h1>Counter : {counter}</h1>

    Enter value 1 : <h3>{value1}</h3>
    <input className="form-control"  value={value1} onChange={(e)=> setValue1(e.target.value)}/>
    

    Enter value 2 : <h3>{value2}</h3>
    <input className="form-control"  value={value2} onChange={(e)=> setValue2(e.target.value)}/>
    </>

}

export default SimpleUseEffectDemo ;