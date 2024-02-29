import { combineReducers } from "redux";
import balanceReducer from "./balanceReducer";
import loginReducer from "./loginReducer";

const allReducers = combineReducers({
    login:loginReducer ,
    transaction:balanceReducer
})

export default allReducers