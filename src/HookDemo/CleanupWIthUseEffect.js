import { useEffect, useState } from "react";

const Timer =()=>{
    const [timer, setTimer] =useState(10) ;
    useEffect(() => {
        console.log("Inside useEffect beginning")
        const interval = setInterval(()=> {
            setTimer((prevTimer) => (prevTimer === 0 ? 0 : prevTimer-1 ))
        } ,1000);

        return () => {
            console.log("Inside useEffect return statement ")
            clearInterval(interval) //clean up activity
          
        }
    },[]) 

    return <p>Timer  : {timer}</p>
}

const ShowHideTimer =({show}) => (show ? <Timer /> : null)


const CleanUpWithUseEffect=()=> {

const [show, setShow] = useState(false) ;
return (
    <>
    From the Container
    <button onClick={() => setShow(!show)}> {show ? 'Hide' : 'Show'}  Timer </button>
    <ShowHideTimer show ={show}/>
    </>
)

}

export default CleanUpWithUseEffect;
