import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { deposit, withdraw } from "../actions";

const Transction =() => {

    const balance = useSelector(state=> state.transaction)
    const dispatch=useDispatch() ;
    const [amount,setAmount] =useState(0) ;

    return (<>
        <h1> Balance : Rs {balance}</h1>
    
        <input type="number" value={amount} onChange={e => setAmount(e.target.value)}  />
    
        <button className="btn btn-primary m-2 p-3 " 
        onClick={()=> dispatch(withdraw(amount))}>Withdraw</button>
    
    <button className="btn btn-primary m-2 p-3 " 
        onClick={()=> dispatch(deposit(amount))}>Deposit</button>
    
    
        </>)
    
}

export default Transction ;