import { useSelector } from "react-redux"
import Greeting from "./Greeting"


export const Home =() =>  {

    const login= useSelector(state=> state.login)
    const balance = useSelector(state => state.transaction)
    
    return  (
    <> 
    
    <h1 style={{color:'green'}}  className='App'> Home Page </h1>
    <Greeting  name ="Reena" age ={ 23}  />
    <h2> You are {login ? 'Logged In' : 'Logged Our'}</h2>

    My balance : {balance}
    </>
    )
   

} 





