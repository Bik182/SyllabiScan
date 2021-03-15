import {
    uploadPDFPending,
    uploadPDFSuccess,
    uploadPDFError,
   
} from "../actions/action.js";




export function uploadPDF(file) {
 
    //Smells weird

    return (dispatch) => {
     
    
    
       
        console.log("GOING,");
        dispatch(uploadPDFPending());
     
        dispatch(uploadPDFSuccess(file));
    }
           
}