// Imports: Dependencies
import { combineReducers } from "redux";
// Imports: Reducers
import calendarReducer from "./calendarReducer.js";
import eventReducer from "./eventReducer.js";

import { initialState as calendarReducerInitial } from "./calendarReducer.js";
import { initialState as eventReducerInitial } from "./eventReducer.js";

const initialState = {
  calendarReducer: calendarReducerInitial,
  eventReducer: eventReducerInitial,
};

// Redux: Root Reducer
const rootReducer = combineReducers({
  calendarReducer: calendarReducer,
  eventReducer: eventReducer,
});
// Exports
export default rootReducer;
