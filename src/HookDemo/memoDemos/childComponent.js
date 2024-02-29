import { useEffect } from "react";

let renderCount = 0 ;

const ChildComponent=()=>{

    useEffect(() => {
        renderCount++ ;
        console.log("Inside the useEffect of Child " , renderCount)
    })

    return <h2>From Child : {renderCount}</h2>

}


export const ChildComponent2=()=>{

    useEffect(() => {
        renderCount++ ;
        console.log("Inside the useEffect of Child 2 " , renderCount)
    })

    return <h2>From Child2 : {renderCount}</h2>

}


export default ChildComponent