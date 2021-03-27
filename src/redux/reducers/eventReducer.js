import * as _ from "lodash";

import { EVENT_PARSE_PENDING, EVENT_PARSE_SUCCESS, EVENT_PARSE_ERROR} from "../actions/action.js";

// Initial State
export const initialState = {
    // Redux Store
   tempEventsHolder:{}
};
// Reducers (Modifies The State And Returns A New State)
export const eventReducer = (state = initialState, action) => {
    switch (action.type) {
      
        case EVENT_PARSE_PENDING: {
            var newState = {
                ...state,
                
            }
            return newState;
        }
        case EVENT_PARSE_SUCCESS: {
            
            var newState = {
                ...state,
               
            }
            return newState;
        }
        case EVENT_PARSE_ERROR: {
            var newState = {
                ...state,
              
            }
            return newState;
        }
     
        // Default
        default: {
            return state;
        }
    }
};

// Exports
export default eventReducer;