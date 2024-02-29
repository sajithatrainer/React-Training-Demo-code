import {useState, useRef ,useEffect} from "react";

export default function WindowsEventWithRefHook(){
    const [on,setOn] = useState(true) ;

    const ulElemRef = useRef() ;

    useEffect(() => {
        const listener = e => {
        if(!ulElemRef.current) return null ;

            if(!ulElemRef.current.contains(e.target)){
                setOn(false) ;
                  }          
        }

console.log("On Status " + on)

window.addEventListener('mousedown' , listener) ;
return () => window.removeEventListener('mousedown',listener)
       
    },[on]) ;

    
if(!on){
    return null ;
}


    return<ul ref={ulElemRef}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Services</li>
    </ul>

}