import { useMemo, useState } from "react";
import ChildComponent, { ChildComponent2 } from "./childComponent";

export default function MemoContainer(){
    const [count,setCounter] =useState(0) ;
const memoizedComponent = useMemo(  () =>{ return <ChildComponent /> },[])


    return <>
    <h1>Memo Container Count value : {count}</h1>
    <button onClick={()=> setCounter(count+1)}> Click</button>
    <ChildComponent />

    <ChildComponent2 />

    </>

}