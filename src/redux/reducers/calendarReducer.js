import * as _ from "lodash";

import { UPLOAD_PDF_PENDING, UPLOAD_PDF_SUCCESS, UPLOAD_PDF_ERROR} from "../actions/action.js";

// Initial State
export const initialState = {
    // Redux Store
    pdfData: {},
    tempUploadHolder: {}
};
// Reducers (Modifies The State And Returns A New State)
export const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
      
        case UPLOAD_PDF_PENDING: {
            var newState = {
                ...state,
                
            }
            return newState;
        }
        case UPLOAD_PDF_SUCCESS: {
            console.log("AC, ", action);
            var newState = {
                ...state,
                tempUploadHolder: action.uploadedFile
            }
            return newState;
        }
        case UPLOAD_PDF_ERROR: {
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
export default calendarReducer;