import { combineReducers } from "redux";
import stats from "./stats_reducer";
const RootReducer = combineReducers({ stats });

export default RootReducer;
