import {  Route,Routes } from "react-router-dom"
import CarHome from "./CarHome"
import Error404 from "./404Error";
import CarList from "./CarList";
import CarDetails from "./CarDetails";
import CarAdd from "./CarAdd";

const CarRouteConfiguration =() => {

    return (<>
  
   <Routes> 
        <Route path="/" element={<CarHome />}/>
        <Route path="/cars" element={<CarList />} />
        <Route path="/cars/add" element={<CarAdd/>} />
        <Route path="/cars/:id" element={<CarDetails />} />
        <Route path="*"  element={<Error404 />} />
  </Routes>
    
  
    
    </>)
}
export default CarRouteConfiguration ;