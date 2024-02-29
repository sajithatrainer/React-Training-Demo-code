import useFormData from "./useFormData";

const NameForm =() =>{
  const {state,addValue,validateInput,clearError} =  useFormData()
const validate =() =>{
 clearError() ;
validateInput((text) => text.length < 5 ? "user name must be more than 5 characters" : null);
validateInput((text) => text.toLowerCase() === "test" ?"User name cannnot be test" : null);

}

  return (<>
  <h1>User Registration </h1>
  <h4>Enter your name : </h4>
<input   className="form-control" type="text"  onChange={addValue}/>
<button className="btn btn-primary" onClick={validate} >Submit</button>

<p>{state.value}</p>

<ul>
    {state.errors.map((err,i) => <li key={i}> 
     <span style={{color:'red'}}>{err}</span></li>)}
</ul>
  </>)
}
export default NameForm ;