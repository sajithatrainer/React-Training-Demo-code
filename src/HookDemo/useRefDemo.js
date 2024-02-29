import { useEffect, useRef } from "react";

const TitleFocus = () => { 
    const inputRef = useRef() ;
    const labelRef= useRef() ;
    const fileInputRef = useRef() ;

    useEffect(()=>{
     inputRef.current.focus() ;
     console.log("From use Effect")

    }) ;

        let message="Welcome" ;
    const focusOn=()=>{
        
        console.log("Label Value " + labelRef.current.innerText)

        labelRef.current.innerText="I have clicked the button"

        console.log("Label Value ********** " + labelRef.current.innerText)
    }
const onFileUpload=()=>{
    fileInputRef.current.click() ;
   
}

    return <>
    <label ref={labelRef} >{message}</label>
    <div> 
   Name :  <input  id="name" type="text" ref={inputRef} />
   <button onClick={focusOn}>Click</button>
   </div>

   <div> 
   <input  id="file" type="file" hidden={true} ref={ fileInputRef } />
   <button onClick={onFileUpload}>Upload File </button>
   </div> 



   
    </>  
}
export default TitleFocus ;