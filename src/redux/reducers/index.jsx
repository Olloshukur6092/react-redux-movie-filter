import { combineReducers } from "redux";
import selectReducer from "./selectReducer";

export default combineReducers({
    select: selectReducer,
})