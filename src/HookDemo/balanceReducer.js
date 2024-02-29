import { useReducer, useState } from "react";

const balanceReducer=(state,action)=>{
    switch(action.type){
        case 'WITHDRAW' : return state - Number(action.payload) ;
        case 'DEPOSIT' : return state + Number(action.payload) ;
        default : return state ;
    }

}
const Transaction =()=>{
    const initialBalance = 10000 ;

    const [amount,setAmount] = useState(0)
    const [balance , dispatch] =useReducer(balanceReducer,initialBalance) 


    return (<>
    <h1> Balance : Rs {balance}</h1>

    <input type="number" value={amount} onChange={e => setAmount(e.target.value)}  />

    <button className="btn btn-primary m-2 p-3 " 
    onClick={()=> dispatch({type:'WITHDRAW' , payload:amount})}>Withdraw</button>

<button className="btn btn-primary m-2 p-3 " 
    onClick={()=> dispatch({type:'DEPOSIT' , payload:amount})}>Deposit</button>


    </>)

}

export default Transaction ;