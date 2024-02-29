import { useEffect, useState } from "react";

import {getCars} from '../assets/carData'
import { Link } from "react-router-dom";

const CarList =()=>{
    const [cars, setCars] =useState([])

    const[error,setError] =useState('')
    useEffect( ()=>{
        getCars().then(data=> setCars(data)).catch(err=> setError(err))

    },[])

const carList = cars.map((c,i) => <li> 
    <p>Id :<Link to={`${c._id}`}>  {c._id} </Link></p> 
    <p>Brand : {c.brand}</p> 
    
    </li>)

    return (<>
    List of cars Avialble
    {carList}
    </>)

}

export default CarList ;