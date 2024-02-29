import { useEffect, useState } from "react"

export default function useZipLookUp(zipcode){
    const [city,setCity] =useState('')
    const[state,setState] =useState('')

    const API_URL =`https://api.zip-codes.com/ZipCodesAPI.svc/1.0/QuickGetZipCodeDetails/`;
    const API_KEY = 'DEMOAPIKEY';

    useEffect(() => {
        console.log(" From zip *************")
        if(zipcode) {
            console.log("From useZip --------" + zipcode)
            const getAddressdata=async () => {
        const response = await fetch(`${API_URL}${zipcode}?key=${API_KEY}`) ;
        const data= await response.json() ;
        console.log("From custom hook" , JSON.stringify(data));
        setCity(data.City);
        setState(data.State)
            } // end of getAddressdata definition 

            getAddressdata() ;
        }
    } , [zipcode])

    
    return [city,state]

}