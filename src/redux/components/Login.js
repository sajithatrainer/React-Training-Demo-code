import { useDispatch, useSelector } from "react-redux"
import { authenticate } from "../actions";

const Login =() => {
   const login = useSelector(state=> state.login)
  const dispatch = useDispatch() ;
   const btnTxt = login ? 'Logout' : 'Login'

   return <>
   <h1>Login Page</h1>
   <h2> You are {login ? 'Logged In' : 'Logged Our'}</h2>
   <button onClick={() =>dispatch(authenticate()) }>{btnTxt}</button>
   
   </>
}

export default Login ;