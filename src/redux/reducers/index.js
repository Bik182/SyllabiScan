// Imports: Dependencies
import { combineReducers } from "redux";
// Imports: Reducers
import calendarReducer from "./calendarReducer.js";

import { initialState as calendarReducerInitial } from "./calendarReducer.js";


const initialState = {
    calendarReducer: calendarReducerInitial,
  
};

// Redux: Root Reducer
const rootReducer = combineReducers({
    calendarReducer: calendarReducer,
  
});
// Exports
export default rootReducer;