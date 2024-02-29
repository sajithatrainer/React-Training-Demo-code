import { useReducer } from "react"

const counterReducer = (state,action) => {
    switch(action){
        case  'increment'  : return state+1 ;
        case 'decrement' : return state-1 ;
        case 'reset' : return 0;
        default : return state ;
    }

}

export const SimpleReducerDemo =()=> {

    const initialValue =100
    const [counter,dispatch] = useReducer(counterReducer,initialValue)

    return <>
    <h1>Counter : {counter}</h1>

    <button className="btn btn-primary m-2 p-2 " onClick={()=> dispatch('increment')}>increment</button>
    <button className="btn btn-secondary m-2 p-2"  onClick={()=> dispatch('decrement')} >decrement</button>
    <button className="btn btn-info m-2 p-2"  onClick={()=> dispatch('reset')}  >reset</button>

    </>

}