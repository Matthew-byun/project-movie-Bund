import { combineReducers } from "redux";
import historyReducer from "./history";
import userReducer from "./user";



const rootReducer = combineReducers({
    history: historyReducer,
    user: userReducer
    
})

export default rootReducer;