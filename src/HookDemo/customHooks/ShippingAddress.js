import { useState } from "react";
import useZipLookUp from "./useZipLookup";

export const ShippingAddress=()=> {

const [zipcode,setZipCode] =useState() ;
const [city,state] = useZipLookUp(zipcode) ;

const formSubmitHandler=(e)=> {
    e.preventDefault() ;
    setZipCode(e.target.zipcode.value)
    console.log("ZipCode :" + zipcode)

}
    return (
        <> 
        <form  onSubmit={formSubmitHandler}> 
        Enter the ZipCode : <input  name="zipcode"/>
        <button type="submit">Look for City and State </button>
        </form>

        <h1>Address</h1>
        <h3>City : {city}</h3>
        <h3>State: {state}</h3>
        </>
    )
} 