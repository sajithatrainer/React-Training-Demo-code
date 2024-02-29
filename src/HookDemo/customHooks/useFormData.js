import { useReducer } from "react";

const inputDataReducer = (state,action) => {
    switch(action.type){
        case 'ADD_VALUE'   : return {...state, value : action.value} ;
        case 'ADD_ERROR'  : return {...state , errors : [...state.errors ,action.error]} ;
        case 'CLEAR_ERROR' : return {...state,errors:[]} ;
        default : return state ;
     
    }

}


const initialState = {value:"",errors:[]}

const useFormData =() => {


    const [state, dispatch] =useReducer(inputDataReducer,initialState);
    //When valid data is entered by the user in the input 
      const addValue = event =>{
        const newValue = event.target.value ;
        dispatch({
            type:'ADD_VALUE',
            value :newValue }) ;
      }

    //When a validation error occurs in the input
    const validateInput =( fn )=> {
        const errFound = fn(state.value) ;
        if(errFound != null){
            dispatch ({
                type: 'ADD_ERROR',
                error :errFound             
            })
        }
    }

    //To clear/reset the errors array
    const clearError = () => {
        dispatch({type: 'CLEAR_ERROR' })
    }


return {state,addValue,validateInput,clearError};
}

export default useFormData ;