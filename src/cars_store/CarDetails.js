import { useNavigate, useParams } from "react-router";

const CarDetails=()=>{

    const {id} = useParams()
    const navigate = useNavigate()

    const navigateToHome=()=>{
        navigate('/cars')

    }

    return <>

    <h1>Car Details of {id} </h1>
    <h3>Id : </h3>
    <h3>Make: </h3>
    <h3>Brand: </h3>

    <h3>Make: </h3>
    <h3>Fuel : </h3>
    <h3>Price : </h3>

    <button onClick={navigateToHome}>Back</button>
    </>
}

export default CarDetails ;